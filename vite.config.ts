/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    })
  ],
  test: {
    environment: 'happy-dom',
    coverage: {
      reporter: ['text'],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Name',
      fileName: 'name'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
