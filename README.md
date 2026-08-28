# Lautaro Mortarotti — Portfolio

Sitio personal donde muestro mis proyectos, mi stack de tecnologías y mi enfoque como desarrollador full stack con mirada técnico-comercial.

**🔗 Ver sitio en vivo:** _agregá acá la URL de tu deploy en Cloudflare Workers_

## Sobre este proyecto

Portfolio construido desde cero con React y TypeScript, con una estética tipo terminal / dark mode. Incluye:

- **Sobre mí** — presentación personal y foco profesional.
- **Proyecto destacado** — con capturas de pantalla que se pueden ampliar en una vista tipo lightbox.
- **Otros proyectos** — con enlaces directos a los repositorios en GitHub.
- **Skills & Stack** — tecnologías organizadas por categoría (frontend, backend, deploy, etc).
- **Contacto** — email con botón de copiado rápido y apertura directa de Gmail para escribir, además del enlace a GitHub.

## Stack tecnológico

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) como bundler
- [Tailwind CSS](https://tailwindcss.com/) para estilos
- [Lucide React](https://lucide.dev/) para íconos
- [Cloudflare Workers](https://workers.cloudflare.com/) para el deploy

## Correrlo en local

```bash
# Cloná el repositorio
git clone https://github.com/mortamc/portfolio.git
cd portfolio

# Instalá las dependencias
npm install

# Levantá el servidor de desarrollo
npm run dev
```

El sitio va a quedar disponible en `http://localhost:5173`.

## Otros comandos disponibles

```bash
npm run build      # Genera el build de producción en /dist
npm run preview    # Sirve el build de producción en local
npm run typecheck  # Chequea los tipos de TypeScript sin compilar
npm run lint       # Corre ESLint sobre el proyecto
```

## Estructura del proyecto

```
src/
├── components/     # Componentes de cada sección (Hero, About, Skills, etc)
├── data/           # Contenido del portfolio (textos, proyectos, skills)
├── App.tsx         # Composición principal de la página
└── main.tsx        # Punto de entrada de React
public/             # Imágenes estáticas (foto de perfil, capturas de proyectos)
```

Para actualizar el contenido del sitio (textos, proyectos, skills), el único archivo que hace falta tocar es `src/data/portfolio.ts`.

## Contacto

- **Email:** mortarotti50@gmail.com
- **GitHub:** [github.com/mortamc](https://github.com/mortamc)
- **Ubicación:** Mendoza, Argentina
