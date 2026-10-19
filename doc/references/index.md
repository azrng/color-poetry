---
doc_type: reference
module: contents
last_updated: 2026-10-19
---

# 引用资料索引

本目录存放撰写与审查 `contents/` 颜色文章时使用的引用资料，仅以 Markdown 供 AI 与维护者查证，不参与站点渲染。

| 文件 | 内容 | 用途 |
| --- | --- | --- |
| [color-values.md](color-values.md) | 色值数据源（zhongguose.com JSON）、口径差异、十色核对状态 | 核对 frontmatter `hex` |
| [poetry.md](poetry.md) | 《枫桥夜泊》原文与通行释义、《诗经》《荀子》引文、来源链接 | 核对诗词引用 |
| [crafts.md](crafts.md) | 蓝染 / 制靛化学机理、蓝印花布工艺与非遗背景、来源链接 | 核对工艺史实描述 |
| [writing-style.md](writing-style.md) | 系列三栏目结构、固定骨架、审查清单、已知待处理项 | 审查文案结构与质量 |

## 维护规则

- 新增颜色文章时，把当次核查过的事实与来源补入对应文件；引用须带 URL 与核对日期
- 色值或史实与资料冲突时，先在文件内记录口径差异，再按选定口径修订文章
- 本目录文件不进入 `contents/`，避免被 Astro colors 集合当作颜色文章构建
