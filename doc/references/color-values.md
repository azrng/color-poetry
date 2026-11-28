---
doc_type: reference
module: contents
last_updated: 2026-11-28
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
| 孔雀蓝 | `#0EB0C9`（zhongguose） | `#0F2CB3` / `#016795`（color-name.com、ArtyClick 等英文 peacock blue 色名站） | 英文 "Peacock Blue" 与中国传统色孔雀蓝并非同一色；本项目统一采用 zhongguose |

## 现值清单与核对状态

| 颜色 | slug | 项目 hex | 核对状态 |
| --- | --- | --- | --- |
| 赤金 | chijin | #EACD76 | 已核对：2026-11-28，zhongguose colors.json 检索不到 `chijin`，hex `#eacd76` 不存在于该数据源——项目值与选定数据源无法互证，引用该色时**不得**在参考资料节列色值源；待用户提供初始出处或确认改值 |
| 月白 | yuebai | #EEF7F2 | 已核对：2026-11-28，zhongguose colors.json 返回 hex `#eef7f2`、RGB 238,247,242、CMYK 11,0,8,0，与项目值一致；网络色表冲突口径仍见上表 |
| 朱红 | zhuhong | #ED5126 | 已核对：2026-11-28，zhongguose colors.json 返回 hex `#ed5126`、RGB 237,81,38、CMYK 0,78,83,0，一致 |
| 霁青 | jiqing | #63BBD0 | 已核对：2026-11-28，zhongguose colors.json 返回 hex `#63bbd0`、RGB 99,187,208、CMYK 74,2,24,0，一致 |
| 栀子黄 | zhizihuang | #EBB10D | 已核对：2026-11-28，zhongguose colors.json 返回 hex `#ebb10d`、RGB 235,177,13、CMYK 3,36,99,0，一致 |
| 竹绿 | zhulv | #1BA784 | 已核对：2026-11-28，zhongguose colors.json 返回 hex `#1ba784`、RGB 27,167,132、CMYK 96,0,64,0，一致 |
| 青莲 | qinglian | #8B2671 | 已核对：2026-11-28，zhongguose colors.json 返回 hex `#8b2671`、RGB 139,38,113、CMYK 43,97,19,8，一致 |
| 琥珀黄 | hupuhuang | #FEBA07 | 已核对：2026-11-28，zhongguose colors.json 返回名称「琥珀黄」hex `#feba07`、RGB 254,186,7、CMYK 0,34,93,0，hex 一致；数据源拼音为 `hupohuang`，项目 slug 为 `hupuhuang`（沿用于 URL，不改动） |
| 海棠红 | haitanghong | #F03752 | 已核对：2026-11-28，zhongguose colors.json 返回 hex `#f03752`、RGB 240,55,82、CMYK 0,86,55,0，一致 |
| 靛青 | dianqing | #1661AB | 已核对：2026-10-19，zhongguose colors.json 返回 hex `#1661ab`、RGB 22,97,171、CMYK 100,60,8,1，一致 |
| 孔雀蓝 | kongquelan | #0EB0C9 | 已核对：2026-11-02，zhongguose colors.json 返回 hex `#0eb0c9`、RGB 14,176,201、CMYK 92,0,28,0，一致 |
| 枫叶红 | fengyehong | #C21F30 | 已核对：2026-11-09，zhongguose colors.json 返回 hex `#c21f30`、RGB 194,31,48、CMYK 10,96,82,2，一致 |
| 茉莉黄 | molihuang | #F8DF72 | 已核对：2026-11-13，zhongguose colors.json 返回 hex `#f8df72`、RGB 248,223,114、CMYK 4,13,67,0，一致 |
| 松霜绿 | songshuanglv | #83A78D | 已核对：2026-11-22，zhongguose colors.json 返回 hex `#83a78d`、RGB 131,167,141、CMYK 61,19,52,3，一致 |
| 景泰蓝 | jingtailan | #2775B6 | 已核对：2026-11-28，zhongguose colors.json 返回 hex `#2775b6`、RGB 39,117,182、CMYK 95,46,10,1，一致（https://zhongguose.com/colors.json） |
