import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/c': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/verify': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/verify/, '/'),
      },
      '/api/verify': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/api/download': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/_next': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
})


