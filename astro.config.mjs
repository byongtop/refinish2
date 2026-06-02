
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";


export default defineConfig({

  redirects: {
    '/service-wood-floor-repair': '/service-floor-repair/',
    '/service-wood-floor-repair/': '/service-floor-repair/',
  },

  output: 'static',
  // 可选值: 
  // 'always' - 强制加上斜杠 (abc.com/about/)
  // 'never'  - 强制去掉斜杠 (abc.com/about)
  // 'ignore' - 默认值，不做处理  
  trailingSlash: 'always', 

  site: 'https://refinish.com.au',
  integrations: [
    sitemap()
  ],

// 配合 build.format 使用
  build: {
    // 'directory' 会生成 about/index.html (对应 always)
    // 'file' 会生成 about.html (对应 never)
    format: 'directory',
  },
});
