#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 articles/{slug}/ 目录编译成站点数据 data.js。

每个文章目录需要：
    meta.json      元信息（title/source/date/versions 及各版密度）
    glossary.json  结构化词条（groups -> words: word/level/match/note）
    low.md mid.md high.md original.md  各版正文

用法：python3 build.py
"""
import html
import json
import re
import sys
from pathlib import Path

BASE = Path(__file__).resolve().parent
ARTICLES = BASE / "articles"


def md_to_html(md: str) -> str:
    """极简 Markdown：段落 / ## 小标题 / > 引用，行内 **粗** *斜* `码`。"""
    raw_blocks = re.split(r"\n\s*\n", md.strip())
    out = []
    for block in raw_blocks:
        block = block.strip()
        if not block:
            continue
        if block.startswith("## "):
            out.append(f"<h3>{inline(block[3:].strip())}</h3>")
            continue
        if block.startswith("> "):
            lines = [inline(l[2:].strip()) for l in block.split("\n") if l.strip()]
            out.append("<blockquote>" + "<br>".join(lines) + "</blockquote>")
            continue
        out.append("<p>" + inline(block.replace("\n", " ")) + "</p>")
    return "\n".join(out)


def inline(s: str) -> str:
    s = html.escape(s, quote=False)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", r"<em>\1</em>", s)
    s = re.sub(r"`(.+?)`", r"<code>\1</code>", s)
    return s


def strip_h1(md: str) -> str:
    return re.sub(r"^#\s+.+?\n+", "", md.strip(), count=1)


def main() -> None:
    slugs = sorted(p.name for p in ARTICLES.iterdir() if p.is_dir())
    if not slugs:
        sys.exit("articles/ 下没有文章目录")

    articles = []
    for slug in slugs:
        d = ARTICLES / slug
        try:
            meta = json.loads((d / "meta.json").read_text(encoding="utf-8"))
            glossary = json.loads((d / "glossary.json").read_text(encoding="utf-8"))
        except FileNotFoundError as e:
            sys.exit(f"{slug}: 缺少 {e.filename}")

        versions = {}
        for key in meta.get("versions", {}):
            md_path = d / f"{key}.md"
            if not md_path.exists():
                sys.exit(f"{slug}: 缺少 {key}.md（meta.json 里声明了）")
            versions[key] = {
                **meta["versions"][key],
                "html": md_to_html(strip_h1(md_path.read_text(encoding="utf-8"))),
            }

        n_words = sum(len((d / f"{k}.md").read_text(encoding="utf-8").split()) for k in versions)
        articles.append({
            "slug": slug,
            "title": meta["title"],
            "source": meta.get("source", ""),
            "sourceUrl": meta.get("sourceUrl", ""),
            "author": meta.get("author", ""),
            "date": meta.get("date", ""),
            "added": meta.get("added", ""),
            "tags": meta.get("tags", []),
            "versions": versions,
            "glossary": glossary.get("groups", []),
            "nWords": n_words,
        })
        print(f"  ✓ {slug}: {len(versions)} 版, {n_words} 词, "
              f"{sum(len(g['words']) for g in glossary.get('groups', []))} 词条")

    data = {"generated": __import__("datetime").date.today().isoformat(), "articles": articles}
    out = BASE / "data.js"
    out.write_text("window.DATA = " + json.dumps(data, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"data.js 已生成（{out.stat().st_size // 1024} KB，{len(articles)} 篇）")


if __name__ == "__main__":
    main()
