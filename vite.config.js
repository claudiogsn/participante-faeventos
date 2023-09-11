import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext', // Defina o target como 'esnext'
  },
  plugins: [react()],
})
