import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", 'index.tsx'),
      name: 'meta-npm-booking',
      fileName: (format) => `meta-npm-booking.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react()]
})
