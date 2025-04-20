# Blog Constitucional: Guatemala 1945 vs 1956

Este proyecto es un blog interactivo desarrollado en React con un estilo visual Frutiger Aero (efectos glassmorphism) que analiza y compara las constituciones guatemaltecas de 1945 y 1956. Ofrece un análisis detallado de tres aspectos constitucionales fundamentales para entender las diferencias entre estos documentos históricos.

Proyecto realizado para el curso "Guatemala en el Contexto Mundial" de la Universidad del Valle de Guatemala.

![Vista previa del blog](./screenshot.png)

## 🎯 Objetivos del proyecto

- Analizar y comparar algunas de las disposiciones de las constituciones de 1945 y 1956
- Crear un blog interactivo que exponga hallazgos, reflexiones y conclusiones
- Estudiar el impacto de cada documento en la historia de Guatemala

## ✨ Características

- Diseño Frutiger Aero con efectos glassmorphism (paneles semi-transparentes con efecto de cristal)
- Análisis comparativo de tres aspectos constitucionales:
  - Garantías Individuales
  - Presidencia de la República
  - Ejército
- Línea de tiempo interactiva del período constitucional
- Tablas comparativas
- Diseño totalmente responsivo para adaptarse a cualquier dispositivo
- Publicado en GitHub Pages

## 🚀 Cómo ejecutar el proyecto

### Requisitos previos

- Node.js (v14 o superior)
- npm o yarn

### Instalación y ejecución local

1. Clona este repositorio
   ```bash
   git clone https://github.com/fatupopzz/blog-constituciones.git
   cd blog-constituciones
   ```

2. Instala las dependencias
   ```bash
   npm install
   # o con yarn
   yarn install
   ```

3. Ejecuta el servidor de desarrollo
   ```bash
   npm start
   # o con yarn
   yarn start
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📦 Estructura del proyecto

```
src/
  ├── components/       # Componentes reutilizables
  │   ├── pages/        # Páginas del blog
  │   │   ├── Home.js
  │   │   ├── GarantiasIndividuales.js
  │   │   ├── Presidencia.js
  │   │   ├── Ejercito.js
  │   │   └── Conclusion.js
  │   ├── BlogImage.js
  │   ├── ComparisonTable.js
  │   ├── Footer.js
  │   ├── GlassCard.js
  │   ├── Header.js
  │   ├── ImagePlaceholder.js
  │   ├── Navigation.js
  │   └── Timeline.js
  ├── styles/           # Archivos CSS
  │   └── main.css
  ├── assets/           # Recursos estáticos
  │   └── images/       # Imágenes utilizadas
  ├── App.js            # Componente principal
  └── index.js          # Punto de entrada
```

## 🔧 Tecnologías utilizadas

- React.js
- CSS3 con efectos modernos (glassmorphism)
- GitHub Pages para despliegue

## 📚 Fuentes de información

Este proyecto se basa en el análisis de las siguientes fuentes documentales:

- [Constitución revolucionaria de 1945](https://archivos.juridicas.unam.mx/www/bjv/libros/5/2210/24.pdf)
- [Constitución contrarrevolucionaria y anticomunista de 1956](https://archivos.juridicas.unam.mx/www/bjv/libros/5/2210/25.pdf)

## 🌐 Despliegue

El blog está disponible públicamente en:
[https://fatupopzz.github.io/blog-constituciones](https://fatupopzz.github.io/blog-constituciones)


## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---

Desarrollado para el curso "Guatemala en el Contexto Mundial" - Universidad del Valle de Guatemala, 2025.
