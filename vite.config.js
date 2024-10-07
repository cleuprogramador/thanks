import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/thanks', // Configura la ruta base según tus necesidades
  plugins: [react()],
  // Otras configuraciones...
});