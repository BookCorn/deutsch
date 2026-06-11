export type SectionKey = 'grammatik' | 'notiz_b1' | 'notiz_b2' | 'mathematic';

export interface SectionMeta {
  key: SectionKey;
  nav: string;
  title: string;
  kicker: string;
  intro: string;
  /** sort notes by weight (grammar) or date desc (journals) */
  order: 'weight' | 'date';
}

export const SECTIONS: SectionMeta[] = [
  {
    key: 'grammatik',
    nav: '语法',
    title: 'Grammatik · 语法',
    kicker: 'Grammatik',
    intro: '德语语法条目：被动句、从句、介词、格变化等系统整理。',
    order: 'weight',
  },
  {
    key: 'notiz_b1',
    nav: 'Notiz B1',
    title: 'Notiz B1',
    kicker: 'Kursnotizen',
    intro: 'B1 课程的课堂随记，按周次记录词汇与例句。',
    order: 'date',
  },
  {
    key: 'notiz_b2',
    nav: 'Notiz B2',
    title: 'Notiz B2',
    kicker: 'Kursnotizen',
    intro: 'B2 学期的课堂随记。',
    order: 'date',
  },
  {
    key: 'mathematic',
    nav: '数学',
    title: 'Mathematik · 数学分析',
    kicker: 'Analysis',
    intro: '数学分析学习笔记：总结与例题解答，含 LaTeX 公式。',
    order: 'date',
  },
];

export const SECTION_MAP = Object.fromEntries(
  SECTIONS.map((s) => [s.key, s])
) as Record<SectionKey, SectionMeta>;
