import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    /*
      Proxy only activated when running on your computer.
      Deployment on Render will prepend appropriate address automatically(?)
    */
    proxy: {
      '/api': {
        target: "http://localhost:8000/",
        changeOrigin: true,
      }
    }
  }
})
