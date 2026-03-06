# IA Presentation

## Descripcion real del producto

Aplicacion web en Angular que muestra una presentacion interactiva sobre Inteligencia Artificial y GitHub Copilot.

## Objetivo del proyecto

Facilitar una sesion de formacion con slides visuales, navegacion simple y soporte responsive para desktop y movil.

## Funcionalidades clave

- Presentacion de 9 slides tematicas.
- Navegacion por flechas, teclado y puntos.
- Barra de progreso y contador de slide.
- Diseno responsive con estilos SCSS.

## Stack tecnico

- Angular 21
- TypeScript 5
- SCSS
- Angular CLI

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Instalacion y uso

```bash
npm install
npm start
```

Abrir `http://localhost:4200`.

## Build de produccion

```bash
npm run build
```

Salida: `dist/ia-presentation/browser`.

## Scripts disponibles

- `npm start`: servidor de desarrollo.
- `npm run build`: build de produccion.
- `npm run watch`: build en modo watch.
- `npm test`: pruebas del proyecto.

## Estructura principal

```text
src/
	app/
		app.ts
		app.html
		app.scss
		components/slide/
		slides/slides.data.ts
	styles.scss
	index.html
```

## Personalizacion del contenido (slides)

Editar `src/app/slides/slides.data.ts` para cambiar titulos, subtitulos, orden y cantidad de slides.

## Despliegue en Netlify

Configurado en `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist/ia-presentation/browser`
