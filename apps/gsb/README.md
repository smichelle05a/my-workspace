# GSB Challenge - Selector de Países Dinámico

Este proyecto es una aplicación web moderna diseñada para permitir la selección y visualización de banderas nacionales de forma dinámica, modular y altamente eficiente. Ha evolucionado desde una estructura estática básica hasta una arquitectura basada en componentes con un sistema de hidratación dinámica.

## 🚀 Estado Inicial del Proyecto

Al inicio del challenge, el proyecto presentaba una estructura rudimentaria:

- **HTML Estático**: Un archivo `index.html` con elementos fijos y sin interactividad real.
- **Sin Estilos**: No existía un sistema de diseño; la aplicación dependía de los estilos por defecto del navegador.
- **Lógica Fragmentada**: Los archivos de TypeScript carecían de una estructura de módulos clara y no estaban integrados con el DOM de forma eficiente.
- **Sin Proceso de Build**: No se contaba con un flujo de trabajo para compilar TypeScript o procesar CSS moderno.

---

## 🛠️ Evolución y Cambios

A lo largo del desarrollo, se realizaron intervenciones críticas divididas en tres categorías:

### 1. Solución de Bugs y Errores Técnicos

- **Compatibilidad ESM**: Se corrigieron las rutas de importación en los archivos TypeScript para incluir la extensión `.js`, necesaria para la ejecución nativa de módulos de ES en el navegador.
- **Gestión de Assets en WSL**: Se resolvieron conflictos de rutas para asegurar que los assets (banderas) se cargaran correctamente desde el entorno de Windows Subsystem for Linux.
- **Manejo de Imágenes Rotas**: Se implementó una lógica de `onerror` en el componente de imagen para evitar que los iconos de imagen rotos arruinaran la experiencia de usuario cuando una bandera no estaba disponible.

### 2. Nuevas Implementaciones (Core)

- **Tailwind CSS v4**: Integración del nuevo motor de Tailwind, eliminando la necesidad de archivos de configuración masivos y permitiendo un diseño basado exclusivamente en utilidades optimizadas.
- **Arquitectura de Componentes**:
  - `Spinner`: Un componente de carga con animaciones "blob" personalizadas mediante variables de `@theme`.
  - `SelectComponent`: Un selector modular que separa la lógica del contenedor de la de las opciones (`OptionComponent`).
  - `ImageComponent`: Un gestor de medios genérico con soporte automático para placeholders.
- **Sistema de Hidratación Dinámica**: Implementación de una función `bootstrap` que orquesta la carga inicial de datos y la inyección de componentes en el DOM.

### 3. Mejoras de Calidad

- **Optimización de Búsqueda (O(1))**: Se reemplazó la búsqueda lineal en arreglos (`.find`) por un `Map` indexado por código de país, permitiendo que la respuesta al usuario sea instantánea sin importar el tamaño de la lista.
- **Clean Code & Refactor**: Se eliminó la duplicación de código en plantillas HTML y se centralizaron todas las rutas y configuraciones en `frontend/config/constants.ts`.
- **UI/UX Premium**: Transición de entradas básicas a una interfaz centrada, con sombras profundas, bordes redondeados (`3xl`) y micro-animaciones de entrada.

---

## 📊 Resumen de Aportes Finales

Tras la intervención, el proyecto ha ganado las siguientes capacidades:

- **Escalabilidad**: La estructura modular permite añadir nuevos componentes o características sin interferir con la lógica existente.
- **Eficiencia de Datos**: La hidratación de la UI solo ocurre cuando es estrictamente necesario, optimizando el uso de recursos del navegador.
- **Robustez Visual**: Gracias a los fallbacks de `ImageComponent`, la aplicación siempre luce pulida, incluso ante fallos de carga de recursos externos.
- **Performance Garantizada**: El uso de estructuras de datos optimizadas (Map) asegura una latencia mínima en la interacción.
- **Mantenibilidad Directa**: El sistema de constantes globales permite realizar ajustes de diseño y rutas en segundos sin buscar en múltiples archivos.

---

## ⚙️ Cómo Ejecutar el Proyecto

1. **Instalar dependencias**: `npm install`
2. **Compilar y Seguir**: `npm run watch` (Ejecuta simultáneamente `tsc` y `tailwindcss` CLI).
3. **Visualizar**: Abrir `index.html` a través de un servidor local (Live Server o equivalente).
