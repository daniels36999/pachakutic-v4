# Sitio informativo · Juan Altamirano — Candidato a Alcalde de Guamote

SPA estática (React + Vite, CSS puro) sin backend, base de datos ni APIs externas.
Navegación por anclas (`#inicio`, `#perfil`, `#trayectoria`, `#propuestas`, `#equipo`, `#contacto`),
por lo que funciona en GitHub Pages sin configurar rutas.

## 1. Instalar
```bash
npm install
```
## 2. Ejecutar en local
```bash
npm run dev
```
Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

## 3. Compilar
```bash
npm run build      # genera la carpeta dist/
npm run preview    # (opcional) prueba la versión compilada
```

## 4. Subir a GitHub
```bash
git init
git add .
git commit -m "Sitio informativo de la candidatura"
git branch -M main
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

## 5. Activar GitHub Pages
1. En el repositorio: **Settings → Pages**.
2. En **Build and deployment → Source** elige **GitHub Actions**.
3. Cada `git push` a `main` ejecuta `.github/workflows/deploy.yml`, compila y publica.
4. La dirección final será `https://USUARIO.github.io/REPOSITORIO/`.

`vite.config.js` usa `base: './'` (rutas relativas): no necesitas escribir el nombre del repositorio.

## 6. Cambiar las fotografías
Todas están en `public/images/`:
- Candidato: `public/images/candidato/juan-altamirano.webp`
- Concejales principales: `public/images/concejales/`
- Suplentes (aún sin foto): usan `public/images/placeholder/avatar.svg`.

Reemplaza el archivo conservando el nombre, o cambia la ruta en `src/data/candidate.js` (campo `photo`)
y en `src/data/candidates.js` (`photo` y `substitute.photo`). Formatos válidos: webp, jpg, png.

## 7. Cambiar nombres, cargos y biografía
- Candidato, biografía, formación, experiencia, trayectoria e indicadores: `src/data/candidate.js`
- Concejales (nombres, principal/suplente, formación, experiencia): `src/data/candidates.js`
  — `formation` y `experience` están vacíos porque el documento no los traía; mientras estén vacíos
  se muestra "Agregar formación" / "Agregar experiencia".

## 8. Cambiar las propuestas
`src/data/proposals.js`
- `proposals`: los 8 programas del plan (art. 55 COOTAD): título, objetivo, icono y área.
- `groups`: las 5 áreas y su color.
- `councilPlan`: los 7 programas del Concejo (art. 58 COOTAD).

Los iconos se escriben por nombre (Lucide). Si usas uno nuevo, agrégalo en `src/components/Icon.jsx`.

## 9. Cambiar redes sociales y contacto
`src/data/candidate.js` → bloque `contact` (`phone`, `email`, `links[].url`).
Mientras un dato esté vacío, la página muestra "Agregar teléfono", "Agregar correo" o "Agregar enlace oficial".
El texto legal del pie de página se escribe en `legalNote`.

## Antes de publicar
- En `index.html`, cambia `og:image` por la URL absoluta de la foto (para vista previa al compartir).
- Completa contacto, redes y leyenda legal electoral.

## Estructura
```
src/components/   componentes (Header, Hero, Profile, Timeline, Roadmap, WorkDiagram, Candidates…)
src/data/         contenido editable
src/styles/       variables.css · global.css · components.css · responsive.css
public/images/    fotografías
.github/workflows/deploy.yml
```
