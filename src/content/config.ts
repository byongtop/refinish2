import { z, defineCollection } from 'astro:content';

export const collections = {
  projects: defineCollection({
    schema: z.object({
      // --- 核心信息 ---
      pageTitle: z.string().describe('案例的主要名称，H1，内容要精炼、直接。强调修复结果和核心挑战，植入关键词，Sydney，地名'),
      description: z.string().describe('项目摘要或简短描述'),
      categories: z.array(z.string()).optional().describe('项目类别 (例如：住宅, 商业)'),
      services: z.array(z.string()).optional().describe('项目提供的服务 (例如：地板修复, 翻新)'),
      client: z.string().describe('项目的客户'),

      // --- 媒体资产 ---
      mainImage: z.string().describe('项目主图（用于列表页或封面）'),
      listImage: z.string().describe('用于列表展示的图片'), // 如果与 mainImage 不同
      // 优化后的 schema (定义图片对象)
      images: z.array(
        z.object({
          url: z.string().describe('图片的文件路径'),
          alt: z.string().describe('图片的描述性 Alt 文本 (唯一且详细)')
        })
      ).min(1).describe('项目详情页的图集'),
      extraImage: z.string().optional().describe('额外的补充图片'),

      // --- 结构化内容：挑战、质量、流程 ---

      // 1. 价值主张：为什么选择修复，而不是更换或整体翻新，提供数字对比，尽可能包含 "Cost saved (e.g., 70%)" 或 "Time saved (e.g., 2 days vs 3 hours)"，使用行业术语
      valueProposition: z.object({
        title: z.string().describe(
          '价值主张标题，用于概括本项目为何采用修复方案而非整体更换或翻新'
        ),
        text: z.array(z.string()).describe(
          '从决策角度阐述修复方案的核心优势，包括在成本、工期和结果上的优化，说明如何通过局部、专业的修复避免不必要的整体更换，保留原有材料与一致性，并在不影响使用或交易的前提下实现资产价值的最大化（Restoration over Replacement）。'
        ),
      }).optional(),


      // 2. 风险：如果不修，会带来什么实际后果
      risk: z.object({
        title: z.string().describe(
          '风险说明标题，用于概括该问题若不处理可能带来的负面影响'
        ),
        description: z.string().optional().describe(
          '对风险背景的补充说明，用于解释问题产生的原因及其潜在影响（可选）'
        ),
        list: z.array(z.string()).describe(
          '列出该问题在使用、交易或检查过程中可能引发的实际风险，例如影响买家判断、触发价格谈判、引起检查疑虑或降低整体价值'
        ),
      }),


      // 3. 修复流程：专业修复是如何完成的，必须包含如 "Hand-painted grain matching", "Pigment reconstruction", 或 "Sheen integration" 等词汇
      restorationProcess: z.object({
        title: z.string().describe(
          '修复流程标题，用于概括本项目的整体修复方法或思路'
        ),
        text: z.array(z.string()).describe(
          '按顺序说明专业修复的关键步骤，包括问题处理方式、修复方法及最终结果，重点体现过程的针对性、可控性以及实现无痕修复的逻辑'
        ),
      }).optional(),

      // --- 元数据 ---
      date: z.date().optional().describe('项目完成日期，推荐使用 Date 类型'),

      // --- SEO ---
      seoTitle: z.string().optional().describe('用于 SEO 的标题，植入关键词，Sydney，地名'),
      seoDescription: z.string().optional().describe('用于 SEO 的描述，植入关键词，Sydney，地名'),
    }),
  }),


  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.string(),
      author: z.string().optional(),
      description: z.string().optional(),
      tags: z.array(z.string()).optional(),
      mainImage: z.string(),
      listImage: z.string(),
      seoKeywords: z.array(z.string()).optional(),
    }),
  }),

};
