import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    globals: true,
    alias: {
      '#components': fileURLToPath(new URL('./components', import.meta.url)),
      '@': '/path/to/src'
    }
  },
});

