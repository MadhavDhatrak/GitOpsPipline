import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://backend-service:5000',
        changeOrigin: true,
        secure: false,
      },
      '/uploads': {
        target: 'http://backend-service:5000',
        changeOrigin: true,
        secure: false,
      },
    }
  },
}) 