import { defineConfig } from 'vite'
import { resolve } from 'path';


export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        subpage: resolve(__dirname, 'subdir/page.html'),
      },
    },
  },
  server: {
    port: 3000, // Default port (change if needed)
    open: true, // Automatically open browser
  },
  publicDir: 'public', // Optional: if you have a public folder
})