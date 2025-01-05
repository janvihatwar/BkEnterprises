import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip', // Or 'brotliCompress' for Brotli compression
      threshold: 10240,   // Compress files larger than 10 KB
      ext: '.gz',          // Add .gz extension to compressed files
    }),
  ],
  build: {
    minify: 'esbuild', // Ensures JavaScript minification with esbuild
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Bundle all node_modules into a vendor chunk
          }
        },
      },
    },
    // Optionally: Enable Brotli compression alongside gzip
    brotliSize: false, // Set to false if you don't want to include brotli size in the build output
  },
});
