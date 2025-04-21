import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Konfigurasi Vite untuk proyek React
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,  // Menentukan port untuk server lokal saat pengembangan
  },
  build: {
    outDir: 'dist',  // Menentukan direktori output build
  },
});
