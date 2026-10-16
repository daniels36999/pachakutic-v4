// Devuelve la ruta correcta de un archivo de /public respetando el "base" de Vite
// (necesario para GitHub Pages).
export const asset = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`;

// 1200 -> "1.200"
export const formatNumber = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
