// 插画提示词读取：构建时从 doc/references/prompts/<slug>.md 读取，供页面注入 data-prompt。
// 结构约定：提示词档内以 `## <栏目> · 图N 《图题》 → NN-MM.png` 小节组织，箭头后是图片文件名。
// 注意：走进程工作目录（仓库根）而非 import.meta.url——vite 打包后后者指向产物路径，相对层级会断。

import fs from 'node:fs';
import path from 'node:path';

const promptsDir = path.join(process.cwd(), 'doc', 'references', 'prompts');

/** 解析单个提示词档：返回 { '01-01.png': '提示词正文', ... } */
export function loadPrompts(slug) {
  const file = path.join(promptsDir, `${slug}.md`);
  if (!fs.existsSync(file)) return {};
  const raw = fs.readFileSync(file, 'utf8');

  const prompts = {};
  // 匹配 `## ... → 01-01.png` 小节标题；正文取到下一小节标题行「之前」（含其前导空行）
  const sectionRe = /^## .*?→ *([0-9]{2}-[0-9]{2}\.png)[ \t]*$/gm;
  const marks = [];
  let match;
  while ((match = sectionRe.exec(raw)) !== null) {
    marks.push({ file: match[1], bodyStart: match.index, nextStart: match.index + match[0].length });
  }
  for (let i = 0; i < marks.length; i++) {
    const bodyEnd = i + 1 < marks.length ? marks[i + 1].bodyStart : raw.length;
    const body = raw.slice(marks[i].nextStart, bodyEnd).trim();
    if (body) prompts[marks[i].file] = body;
  }
  return prompts;
}
