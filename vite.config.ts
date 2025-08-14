import { defineConfig } from 'vite';

export default defineConfig({
  base: '/01-ts-basics/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Додаємо підтримку .ts файлів
  },
});