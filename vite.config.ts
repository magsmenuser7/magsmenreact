import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/magsmenreact/" : "/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));