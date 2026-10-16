import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' => las rutas de scripts, estilos e imágenes son relativas.
// Funciona en GitHub Pages (https://usuario.github.io/NOMBRE-REPO/) sin
// tener que escribir el nombre del repositorio. Si prefieres una ruta
// absoluta, usa:  base: '/NOMBRE-REPO/'
export default defineConfig({
  base: './',
  plugins: [react()],
});
