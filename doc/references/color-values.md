---
doc_type: reference
module: contents
last_updated: 2026-10-19
---

# 引用资料：颜色色值数据源

> 供 AI 与维护者核对 `contents/*.md` frontmatter 的 `hex`，不参与站点渲染。
> 核对结论须注明来源与日期；不同资料口径冲突时，以本文件记录的选定口径为准，不擅自改值。

## 选定数据源

- **中国色 zhongguose.com**：`https://zhongguose.com/colors.json`
  - JSON 数组，字段：`name` / `pinyin` / `hex` / `RGB` / `CMYK`
  - 核对方法：拉取 JSON 后按 `pinyin`（如 `dianqing`）检索，比对 `hex`（忽略大小写）
- 文章正文里引用的 `chinesecoloratlas.com`、百度百科等仅作旁证，色值以上述 JSON 为准

## 已知口径差异

| 颜色 | 选定口径 | 冲突口径 | 说明 |
| --- | --- | --- | --- |
| 靛青 | `#1661AB`（zhongguose） | `#177CB0`（box3.cn / colory.cc 等网络色表） | 两套网络色表不同源；本项目统一采用 zhongguose |
| 月白 | `#EEF7F2`（现行项目值） | `#d6ecf0`（优设色表等） | 尚未定源，修订前先确认口径 |

## 现值清单与核对状态

| 颜色 | slug | 项目 hex | 核对状态 |
| --- | --- | --- | --- |
| 赤金 | chijin | #EACD76 | 待核对 |
| 月白 | yuebai | #EEF7F2 | 待核对（存在口径冲突，见上表） |
| 朱红 | zhuhong | #ED5126 | 待核对 |
| 霁青 | jiqing | #63BBD0 | 待核对 |
| 栀子黄 | zhizihuang | #EBB10D | 待核对 |
| 竹绿 | zhulv | #1BA784 | 待核对 |
| 青莲 | qinglian | #8B2671 | 待核对 |
| 琥珀黄 | hupuhuang | #FEBA07 | 待核对 |
| 海棠红 | haitanghong | #F03752 | 待核对 |
| 靛青 | dianqing | #1661AB | 已核对：2026-10-19，zhongguose colors.json 返回 hex `#1661ab`、RGB 22,97,171、CMYK 100,60,8,1，一致 |
