import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      jsxImportSource: 'react',
      remarkPlugins: [remarkGfm],
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['@mdx-js/react']
  },
});
