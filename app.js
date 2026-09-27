/* Graded Reader — 前端逻辑（零构建 vanilla JS） */
(function () {
  "use strict";
  const D = window.DATA || { articles: [] };
  const $ = (s, el) => (el || document).querySelector(s);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g,
    c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} },
  };

  const VERSION_ORDER = ["low", "mid", "high", "original"];

  /* ================= index ================= */
  function renderIndex() {
    const main = $("#article-list");
    if (!D.articles.length) {
      main.innerHTML = "<p class='empty'>articles/ 还没有文章 —— 丢一个目录进来跑 build.py</p>";
      return;
    }
    main.innerHTML = "";
    D.articles.forEach(a => {
      const last = store.get("gr:last:" + a.slug, null);
      const card = document.createElement("a");
      card.className = "card";
      card.href = "article.html?slug=" + encodeURIComponent(a.slug);
      card.innerHTML =
        "<h2>" + esc(a.title) + "</h2>" +
        "<p class='meta'>" + esc([a.source, a.author].filter(Boolean).join(" · ")) +
        (a.date ? " · " + esc(a.date) : "") + "</p>" +
        "<p class='badges'>" + versionBadges(a) + "</p>" +
        (last ? "<p class='resume'>继续读 → " + esc(last.label) + "</p>" : "");
      main.appendChild(card);
    });
  }

  function versionBadges(a) {
    return VERSION_ORDER.filter(v => a.versions[v]).map(v => {
      const it = a.versions[v];
      return "<span class='badge b-" + v + "'>" + esc(it.label) + " " +
        (it.density != null ? it.density.toFixed(1) + "%" : "") + "</span>";
    }).join("");
  }

  /* ================= article ================= */
  function renderArticle() {
    const slug = new URLSearchParams(location.search).get("slug");
    const a = D.articles.find(x => x.slug === slug);
    const view = $("#article-view");
    if (!a) {
      view.innerHTML = "<p class='empty'>没有这篇文章（?slug=…）</p>";
      return;
    }
    document.title = a.title + " · Graded Reader";
    CUR = a;
    const versions = VERSION_ORDER.filter(v => a.versions[v]);
    const saved = store.get("gr:ver:" + a.slug, versions.includes("mid") ? "mid" : versions[0]);

    view.innerHTML =
      "<div class='art-head'>" +
        "<h1>" + esc(a.title) + "</h1>" +
        "<p class='meta'>" + esc([a.source, a.author].filter(Boolean).join(" · ")) +
          (a.date ? " · " + esc(a.date) : "") +
          (a.sourceUrl ? " · <a href='" + esc(a.sourceUrl) + "' target='_blank' rel='noopener'>原文出处</a>" : "") +
        "</p>" +
      "</div>" +
      "<nav class='tabs' id='tabs'>" +
        versions.map(v => {
          const it = a.versions[v];
          return "<button class='tab' data-v='" + v + "'>" + esc(it.label) +
            (it.density != null ? "<span class='d'>" + it.density.toFixed(1) + "%</span>" : "") + "</button>";
        }).join("") +
      "</nav>" +
      "<p class='ver-desc' id='ver-desc'></p>" +
      "<div class='prose' id='prose'></div>" +
      glossarySection(a) +
      pager(a, versions);

    const tabs = $("#tabs");
    tabs.addEventListener("click", e => {
      const btn = e.target.closest(".tab");
      if (btn) switchVersion(a, btn.dataset.v);
    });
    document.addEventListener("keydown", e => {
      if (e.target.tagName === "INPUT") return;
      const cur = versions.indexOf(current);
      if (e.key === "ArrowRight" && cur < versions.length - 1) switchVersion(a, versions[cur + 1]);
      if (e.key === "ArrowLeft" && cur > 0) switchVersion(a, versions[cur - 1]);
    });

    bindGlossarySection(a);
    highlight(a);
    switchVersion(a, versions.includes(saved) ? saved : versions[0], true);
  }

  let current = null;
  let CUR = null; // 当前文章对象（卡片/导出回调用）

  function switchVersion(a, v, restore) {
    if (current) store.set("gr:pos:" + a.slug + ":" + current, window.scrollY);
    current = v;
    $("#prose").innerHTML = a.versions[v].html;
    $("#ver-desc").textContent =
      (a.versions[v].desc || "") +
      (a.versions[v].target && a.versions[v].target !== "—" ? " · 生词密度目标 " + a.versions[v].target : "");
    document.querySelectorAll(".tab").forEach(t =>
      t.classList.toggle("active", t.dataset.v === v));
    store.set("gr:ver:" + a.slug, v);
    store.set("gr:last:" + a.slug, { label: a.versions[v].label, at: Date.now() });
    highlight(a);
    const y = restore ? store.get("gr:pos:" + a.slug + ":" + v, 0) : 0;
    window.scrollTo(0, y);
    closeCard();
  }

  /* ================= glossary highlight & card ================= */
  let glossIndex = [];   // [{forms:[{re,entry}], entry}]

  function buildIndex(a) {
    const list = [];
    a.glossary.forEach(g => g.words.forEach(w => list.push(w)));
    return list.map(entry => {
      const forms = (entry.match && entry.match.length ? entry.match : [entry.word]).map(surface => {
        const e = surface.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return { re: new RegExp("\\b" + e + "(s|es|ed|d|ing)?\\b", "i"), surface };
      });
      return { entry, forms };
    });
  }

  function highlight(a) {
    if (!glossIndex.length) glossIndex = buildIndex(a);
    const root = $("#prose");
    const checked = store.get("gr:checked:" + a.slug, {});
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n =>
        n.parentElement.closest("mark.gloss") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(startNode => {
      let node = startNode;
      while (node) {
        const text = node.nodeValue;
        let best = null; // 取位置最靠前的命中，逐个包裹
        for (const { entry, forms } of glossIndex) {
          for (const f of forms) {
            const m = f.re.exec(text);
            if (m && (!best || m.index < best.index)) {
              best = { entry, index: m.index, len: m[0].length, surface: m[0] };
            }
          }
        }
        if (!best) break;
        const mark = document.createElement("mark");
        mark.className = "gloss" + (checked[best.entry.word] ? " mastered" : "");
        mark.dataset.word = best.entry.word;
        mark.textContent = best.surface;
        node.splitText(best.index);
        const tail = node.nextSibling;
        tail.textContent = text.slice(best.index + best.len);
        node.parentNode.insertBefore(mark, tail);
        node = tail; // 继续扫剩余文本
      }
    });
  }

  function bindGlossarySection(a) {
    const box = $("#gloss-box");
    if (!box) return;
    const checked = store.get("gr:checked:" + a.slug, {});
    box.addEventListener("change", e => {
      const cb = e.target.closest("input[data-word]");
      if (!cb) return;
      checked[cb.dataset.word] = cb.checked;
      store.set("gr:checked:" + a.slug, checked);
      document.querySelectorAll("mark.gloss[data-word='" + cb.dataset.word + "']")
        .forEach(m => m.classList.toggle("mastered", cb.checked));
      updateCount(a);
      closeCard();
    });
    const btn = $("#export-btn");
    btn.addEventListener("click", () => exportMastered(a));
    updateCount(a);
  }

  function updateCount(a) {
    const checked = store.get("gr:checked:" + a.slug, {});
    const n = Object.values(checked).filter(Boolean).length;
    const cnt = $("#gloss-cnt"), btn = $("#export-btn");
    if (cnt) cnt.textContent = "已掌握 " + n + " / " + glossTotal;
    if (btn) {
      btn.disabled = n === 0;
      btn.textContent = n ? "导出已掌握词（" + n + "）" : "导出已掌握词";
    }
  }

  let glossTotal = 0;

  function glossarySection(a) {
    glossTotal = a.glossary.reduce((n, g) => n + g.words.length, 0);
    glossIndex = []; // 每篇文章重建
    return "<details class='gloss-box' id='gloss-box' open>" +
      "<summary>生词对照表 <span class='cnt' id='gloss-cnt'></span>" +
      "<button class='export-btn' id='export-btn' disabled>导出已掌握词</button></summary>" +
      "<p class='gloss-tip'>读完全部四档后，遮住右侧说明只看左列词，能说出意思就勾选；导出后用 merge_profile.py 回写画像。</p>" +
      a.glossary.map(g =>
        "<div class='gloss-group'><h3>" + esc(g.name) + "</h3>" +
        g.words.map(w =>
          "<div class='g-item'><input type='checkbox' data-word='" + esc(w.word) + "'" +
          (store.get("gr:checked:" + a.slug, {})[w.word] ? " checked" : "") + ">" +
          "<div><span class='w'>" + esc(w.word) + "</span><span class='lv'>" + esc(w.level) + "</span>" +
          "<div class='note'>" + esc(w.note) + "</div></div></div>"
        ).join("") + "</div>"
      ).join("") +
      "</details>";
  }

  function exportMastered(a) {
    const checked = store.get("gr:checked:" + a.slug, {});
    const words = Object.keys(checked).filter(w => checked[w]);
    const payload = { exported: new Date().toISOString().slice(0, 10), article: a.slug, words };
    const text = JSON.stringify(payload, null, 2);
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "known-words-" + a.slug + "-" + payload.exported + ".json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    btnFlash("已复制并下载 ✓");
  }

  function btnFlash(msg) {
    const btn = $("#export-btn");
    if (!btn) return;
    btn.textContent = msg;
    setTimeout(() => { if (CUR) updateCount(CUR); }, 1600);
  }

  /* ---------- word card ---------- */
  const card = document.createElement("div");
  card.className = "gloss-card";
  card.style.display = "none";
  document.addEventListener("click", e => {
    const mark = e.target.closest("mark.gloss");
    if (mark && $("#prose")) { showCard(a2(), mark); e.stopPropagation(); return; }
    if (!e.target.closest(".gloss-card")) closeCard();
  });
  function a2() { return D.articles.find(x => x.slug === new URLSearchParams(location.search).get("slug")); }

  function showCard(a, mark) {
    const word = mark.dataset.word;
    let entry = null;
    glossIndex.forEach(({ entry: en }) => { if (en.word === word && !entry) entry = en; });
    const checked = store.get("gr:checked:" + a.slug, {});
    card.innerHTML =
      "<div class='w'>" + esc(word) + "<span class='lv'>" + esc(entry && entry.level || "") + "</span></div>" +
      "<div class='note'>" + esc(entry && entry.note || "") + "</div>" +
      "<label><input type='checkbox' id='card-check' data-word='" + esc(word) + "'" +
      (checked[word] ? " checked" : "") + "> 已掌握（同步到对照表）</label>";
    card.querySelector("input").addEventListener("change", e => {
      checked[e.target.dataset.word] = e.target.checked;
      store.set("gr:checked:" + a.slug, checked);
      document.querySelectorAll("mark.gloss[data-word='" + e.target.dataset.word + "']")
        .forEach(m => m.classList.toggle("mastered", e.target.checked));
      const box_cb = document.querySelector("#gloss-box input[data-word='" + e.target.dataset.word + "']");
      if (box_cb) box_cb.checked = e.target.checked;
      updateCount(a);
    });
    $("#article-view").appendChild(card);
    const r = mark.getBoundingClientRect();
    card.style.display = "block";
    const top = r.bottom + window.scrollY + 8;
    const left = Math.min(r.left + window.scrollX, window.scrollX + document.documentElement.clientWidth - card.offsetWidth - 12);
    card.style.top = top + "px";
    card.style.left = Math.max(12, left) + "px";
  }

  function closeCard() { card.style.display = "none"; }

  /* ---------- pager ---------- */
  function pager(a, versions) {
    const idx = D.articles.indexOf(a);
    const prev = D.articles[idx - 1], next = D.articles[idx + 1];
    return "<div class='pager'>" +
      (prev ? "<a href='article.html?slug=" + encodeURIComponent(prev.slug) + "'>← 上一篇<b>" + esc(prev.title) + "</b></a>" : "<span></span>") +
      (next ? "<a href='article.html?slug=" + encodeURIComponent(next.slug) + "'>下一篇 →<b>" + esc(next.title) + "</b></a>" : "<span></span>") +
      "</div>";
  }

  /* ================= dispatch（放最后：所有 let 状态已初始化） ================= */
  const page = document.body.id;
  try {
    if (page === "page-index") renderIndex();
    if (page === "page-article") renderArticle();
  } catch (err) {
    const v = document.querySelector("#article-view") || document.body;
    v.innerHTML = "<p class='empty'>渲染出错：" + esc(err.message) + "</p><pre style='white-space:pre-wrap;padding:0 20px;color:#c62828'>" +
      esc(err.stack || "") + "</pre>";
  }
})();
