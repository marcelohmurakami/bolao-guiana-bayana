import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      '/football-api': {
        target: 'https://www.football-data.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/football-api/, '')
      }
    }
  }
});

