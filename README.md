# MyWorkspace

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Acerca de este repositorio

Este es un **monorepoNX** diseñado para centralizar múltiples proyectos web en un único espacio de trabajo. NX es una herramienta de construcción inteligente y extensible que permite gestionar aplicaciones y librerías de manera eficiente, ofreciendo beneficios significativos como la compartición de código entre proyectos, tareas de build optimizadas, caching remoto y una configuración unificada para todo el ecosistema de desarrollo.

## Proyectos

### UIGen

UIGen es una aplicación web de generación de componentes React asistida por inteligencia artificial. Permite a los usuarios crear interfaces de usuario mediante descripciones en lenguaje natural, las cuales son procesadas por modelos de IA para generar código React funcional en tiempo real. La plataforma incluye un editor de código avanzado con resaltado de sintaxis, un sistema de vista previa en vivo, persistencia de proyectos para usuarios registrados, y soporte para exportación de código generado. Está construida con Next.js 15, React 19, TypeScript, Tailwind CSS v4, Prisma con SQLite y el SDK de Vercel AI para la integración con Anthropic Claude.

## Ejecución de tareas

Para ejecutar tareas con NX utiliza:

```sh
npx nx <target> <project-name>
```

Por ejemplo:

```sh
npx nx serve uigen
npx nx build uigen
```

## Agregar nuevos proyectos

Puedes agregar nuevos proyectos a tu workspace utilizando los plugins de NX y sus generadores de código. Por ejemplo, para agregar React:

```sh
npx nx add @nx/react
npx nx g @nx/react:app nombre-del-proyecto
```

## Configuración de CI

Para conectar tu workspace con Nx Cloud y obtener un pipeline de CI rápido y escalable, ejecuta:

```sh
npx nx connect
```

## Instalación de dependencias por proyecto

Cada proyecto en el directorio `apps/` tiene sus propias dependencias. Para instalar las dependencias de un proyecto específico:

```sh
cd apps/uigen
npm install
npm run setup
```

## Enlaces útiles

- [Documentación de Nx](https://nx.dev)
- [Nx Console - Extensión para IDEs](https://nx.dev/getting-started/editor-setup)
- [Comunidad de Nx en Discord](https://go.nx.dev/community)
