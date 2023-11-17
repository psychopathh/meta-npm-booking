import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'meta-npm-booking',
      // formats: ["es", "umd", 'cjs'],
      fileName: "meta-npm-booking"
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
  plugins: [react(), dts({
    insertTypesEntry: true,
  }),]
})
