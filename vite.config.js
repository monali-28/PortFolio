import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PortFolio/',
  server: {
    host: '0.0.0.0',
  }
})
