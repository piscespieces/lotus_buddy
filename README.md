# Lotus Buddy — Jekyll Landing Page SaaS Template

![Lotus Buddy](https://github.com/user-attachments/assets/0f18b9e3-cc41-4462-ae16-ad218174eca3)

Este es un template de landing page estático desarrollado con [Jekyll](https://jekyllrb.com/) y [TailwindCSS](https://tailwindcss.com/). Inspirado en landing pages que llegaron al ranking top de [ProductHunt](https://producthunt.com/).

El landing page está dividido en varias secciones personalizables y utiliza [Splide](https://splidejs.com/) para la animación de los testimonials, así como [GitHub Actions](https://github.com/features/actions) para deploy en [GitHub Pages](https://pages.github.com/).

**Este template es 100% responsive**, asegurando una experiencia óptima en dispositivos de escritorio, tabletas y móviles.

[Aquí puedes ver un live demo del app, deployed en Github Pages](https://piscespieces.github.io/lotus_buddy/)

## Estructura del Template

Este template incluye las siguientes secciones:

- **Hero**: Sección de introducción con una llamada a la acción principal.
- **Features**: Lista de características destacadas.
- **Testimonials**: Slider de testimonios animados con Splide.
- **Pricing**: Opciones de precios.
- **CTA**: Llamada a la acción final.

## Personalización

Toda la información de las secciones (textos, subheaders, etc.) está configurada para leerse desde archivos YAML en el directorio `_data`. Esto permite una fácil personalización del contenido sin necesidad de modificar el código HTML directamente.

Para cambiar el contenido de una sección:

1. Navega al directorio `_data`.
2. Modifica los archivos YAML correspondientes a cada sección. Los cambios se reflejarán automáticamente en la página cuando la recompiles.

## Tecnologías Usadas

- **Jekyll**: Motor de generación estática.
- **TailwindCSS**: Framework de estilos, implementado con [PostCSS](https://postcss.org/).
- **Splide**: Biblioteca de animación para el slider de testimonials.
- **GitHub Actions**: Automatización del deploy en GitHub Pages.

## Instalación y Ejecución

### Prerrequisitos

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Bundler](https://bundler.io/)
- [Node.js y Yarn](https://nodejs.org/en/)

### Instalación

1. Instala las dependencias de Ruby:

 ```bash
 bundle install
 ```

2. Instala las dependencias de Node.js con Yarn:

  ```bash
  yarn install
  ```

### Ejecutar Localmente

Para ver el landing page en un entorno local, ejecuta:

  ```bash
  bundle exec jekyll serve
  ```

Luego, abre `http://localhost:4000` en tu navegador.

### Deploy en GitHub Pages

Este template incluye un flujo de trabajo de **GitHub Actions** configurado para hacer deploy automáticamente en GitHub Pages cada vez que se hagan commits en el `main` / `master` branch.

Para activar el deploy en GitHub Pages:

1. En tu repositorio, ve a **Settings** > **Pages**.
2. Selecciona la fuente de deploy como la rama `master`.
3. Guarda los cambios.

Cada vez que hagas push a la rama principal, el action de GitHub automáticamente compilará y desplegará el sitio en GitHub Pages.

<hr/>

## Contribuciones

Siéntete libre de enviar pull requests o reportar problemas. ¡Toda contribución es bienvenida!

## Ayuda

Si necesitas ayuda o tienes dudas sobre como funciona algo, escribe un Github Issue, o contactamente por [Twitter / X](https://x.com/solomartian)


