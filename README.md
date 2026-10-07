# Graded Reader

同一条英文新闻，四档难度（低 / 中 / 高 / 原文），零构建纯静态阅读站，部署在 GitHub Pages。
内容全部经过 [eng-news-learner](https://github.com/) 的生词密度验收，与个人词汇画像闭环：
勾选掌握的词 → 导出 → 回写画像 → 分级自动跟上水平。

## 阅读循环

1. 在站点上按 **低 → 中 → 高 → 原文** 螺旋读一篇（tab 切换，进度自动记住）
2. 展开页面底部「生词对照表」，遮住右侧说明，能说出意思的词打勾
3. 点「导出已掌握词」（自动复制 + 下载 JSON）
4. 回写画像：

```bash
python3 merge_profile.py ~/Downloads/known-words-npr-south-africa-2026-09-27.json
```

## 本地预览

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

直接双击 index.html 也可以用（数据走 `<script>` 加载，file:// 协议无碍）。

## 加新文章

```text
articles/
└── {slug}/
    ├── meta.json       # 标题/来源/日期/各版密度（versions 四键：low mid high original）
    ├── glossary.json   # 结构化词条（groups → words: word/level/match/note）
    ├── low.md          # A2 摘编，密度 <2%
    ├── mid.md          # i+1 区，2–5%
    ├── high.md         # 接近原文，5–8%
    └── original.md     # 原文纯文本
```

然后 `python3 build.py` 重新生成 data.js，push 即上线。

首页按 tags 里的 `maimemo` 分成「墨墨单词」「新闻」两组各自展示，组内按 `date`
（缺省回退 `added`）倒序；上一篇/下一篇也走同一顺序。

内容生产管线在 `eng-news-learner`（workspace）：重写 → `grader.py` 验收密度 → 达标后把
四个 md 拷进来。glossary.json 参照现有文章的格式，`match` 字段列出要在正文里高亮的词形。

## 部署 GitHub Pages

```bash
git remote add origin git@github.com:<你的用户名>/graded-reader.git
git push -u origin main
```

然后在 GitHub 仓库 Settings → Pages → Source 选 **Deploy from a branch**，分支 `main`，目录 `/ (root)`。
站点地址：`https://<你的用户名>.github.io/graded-reader/`。

## 文件

| 文件 | 作用 |
|------|------|
| `index.html` / `article.html` | 列表页 / 阅读页（静态壳） |
| `app.js` / `style.css` | 全部前端逻辑与样式，无依赖 |
| `data.js` | build 产物（内容即数据），随仓库提交 |
| `build.py` | articles/*/ → data.js 编译器 |
| `merge_profile.py` | 导出的已掌握词 → profile.json 合并器 |
