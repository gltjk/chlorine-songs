import { defineConfig } from 'vite-plus';

// Vite+ 工具链配置（vp check / vp fmt / vp lint）
// 注意：Astro 构建由 astro.config.mjs 控制，此文件仅供 vp 使用
export default defineConfig({
  lint: {
    // 暂用默认规则；后续按需扩展
  },
});
