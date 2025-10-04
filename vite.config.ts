import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // public を静的コピーとして扱わず、ソースとして動かすため無効化
  publicDir: false,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
