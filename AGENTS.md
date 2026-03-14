# MyWorkspace - UIGen

## Descripción General

MyWorkspace es un monorepo NX que centraliza múltiples proyectos web. UIGen es una aplicación web de generación de componentes React asistida por inteligencia artificial que permite crear interfaces de usuario mediante descripciones en lenguaje natural, procesadas por modelos de IA para generar código React funcional en tiempo real.

## Ubicación

`/apps/uigen/` Puerto: 3000 (desarrollo)

## Características Principales

- **Generación de Componentes IA**: Descripciones en lenguaje natural convertidas a código React
- **Vista Previa en Vivo**: Renderizado en tiempo real de componentes generados
- **Editor de Código**: Monaco Editor con resaltado de sintaxis
- **Sistema de Archivos Virtual**: Sin archivos escritos al disco
- **Persistencia de Proyectos**: Guardado de proyectos para usuarios registrados
- **Exportación de Código**: Descarga del código generado

## Comandos

### Desarrollo
```bash
npm run dev              # Iniciar servidor (puerto 3000)
npm run dev:daemon       # Iniciar en background con logs
```

### Producción
```bash
npm run build           # Build de producción
npm run start           # Iniciar servidor producción
```

### Utilidades
```bash
npm run lint            # Linting
npm run test            # Ejecutar tests (Vitest)
npm run setup           # Instalar deps + Prisma generate + migrate
npm run db:reset        # Resetear base de datos
```

## Estructura del Proyecto

```
apps/uigen/
├── prisma/
│   └── schema.prisma      # Modelo de datos
└── src/
    ├── app/               # Rutas Next.js (App Router)
    │   ├── api/chat/      # API de chat con IA
    │   └── [projectId]/   # Rutas dinámicas por proyecto
    ├── components/        # Componentes React
    │   ├── ui/            # Componentes base (shadcn)
    │   ├── chat/          # Componentes de chat
    │   ├── editor/        # Editor de código
    │   └── preview/       # Vista previa de componentes
    ├── lib/               # Utilidades y lógica
    │   ├── provider.ts    # AI Provider (Claude)
    │   ├── file-system.ts # Sistema de archivos virtual
    │   ├── tools/         # Herramientas AI
    │   │   ├── file-manager.ts
    │   │   └── str-replace.ts
    │   └── prompts/       # Prompts para IA
    ├── hooks/             # Custom React hooks
    └── actions/           # Server Actions
```

## Patrones de Código

### Conventional Commits
Usar formato Commitizen:
```
<tipo>(<alcance>): <descripción>
Tipos: feat, fix, docs, style, refactor, test, chore
```

### Estructura de Componentes
- Componentes base en `src/components/ui/`
- Componentes de features en subdirectorios (chat, editor, preview)
- Usar Radix UI para componentes accesibles
- Estilos con Tailwind CSS v4 (sin CSS Modules)

### Integración AI
- Vercel AI SDK para streaming de respuestas
- Anthropic Claude como modelo subyacente
- Herramientas custom: file-manager, str-replace

## Tech Stack

- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Prisma + SQLite
- Anthropic Claude SDK + Vercel AI SDK
- Radix UI + shadcn/ui
- Monaco Editor
- Vitest

## Archivos Importantes

| Archivo | Descripción |
|---------|-------------|
| `prisma/schema.prisma` | Modelo de datos (User, Project) |
| `src/lib/provider.ts` | Configuración AI provider |
| `src/app/api/chat/route.ts` | Endpoint principal del chat |
| `src/lib/file-system.ts` | Sistema de archivos virtual |
| `src/lib/tools/*.ts` | Herramientas AI |

> **Nota**: El schema de la base de datos está definido en `apps/uigen/prisma/schema.prisma`. Referencialo cada vez que necesites entender la estructura de la data almacenada.

## Configuración de Entorno

⚠️ NUNCA hacer commit de archivos .env (ya están en .gitignore)

El proyecto funciona sin API key (retorna código estático).

## Última Actualización

Marzo 2026 - Creación de AGENTS.md para documentación del proyecto
