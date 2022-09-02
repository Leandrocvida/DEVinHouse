import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/index.js'),
      '@images': path.resolve(__dirname, './src/assets/images/index.js'),
      '@icons': path.resolve(__dirname, './src/assets/icons/index.js'),
      '@services': path.resolve(__dirname, './src/services/index.js'),
      '@contexts': path.resolve(__dirname, './src/contexts/index.js'),
      '@pages': path.resolve(__dirname, './src/pages/index.js'),
      '@router': path.resolve(__dirname, './src/router/index.js'),
      '@utils': path.resolve(__dirname, './src/utils/index.js'),
    },
  },
  plugins: [react()]
})
