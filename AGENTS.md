# MyWorkspace - AGENTS.md

## Propósito del Repositorio

**MyWorkspace** es un monorepo NX que centraliza múltiples proyectos web. Actualmente contiene:

### UIGen
Aplicación web de generación de componentes React asistida por inteligencia artificial. Permite a los usuarios crear interfaces de usuario mediante descripciones en lenguaje natural, procesadas por modelos de IA (Anthropic Claude) para generar código React funcional en tiempo real.

## Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **IA**: Anthropic Claude SDK + Vercel AI SDK
- **UI Components**: Radix UI + shadcn/ui patterns
- **Editor**: Monaco Editor
- **Testing**: Vitest
- **Build**: NX monorepo

## Estructura del Proyecto

```
my-workspace/
├── apps/
│   └── uigen/                 # Aplicación principal
│       ├── prisma/
│       │   └── schema.prisma  # Modelo de datos
│       └── src/
│           ├── app/           # Rutas Next.js (App Router)
│           │   ├── api/chat/  # API de chat con IA
│           │   └── [projectId]/ # Routes dinámicas por proyecto
│           ├── components/    # Componentes React
│           │   ├── ui/        # Componentes base (shadcn)
│           │   ├── chat/      # Componentes de chat
│           │   ├── editor/    # Editor de código
│           │   └── preview/   # Vista previa de componentes
│           ├── lib/          # Utilidades y lógica
│           │   ├── provider.ts # AI Provider configuration
│           │   ├── tools/    # Herramientas AI (file-manager, str-replace)
│           │   └── prompts/  # Prompts para IA
│           ├── hooks/        # Custom React hooks
│           └── actions/      # Server Actions
├── nx.json                    # Configuración NX
└── package.json               # Dependencias root
```

## Comandos Importantes

### NX (Monorepo)
```bash
npx nx <target> <project-name>   # Ejecutar tarea en proyecto específico
```

### UIGen (dentro de apps/uigen)
```bash
npm run dev              # Iniciar servidor desarrollo (puerto 3000)
npm run dev:daemon       # Iniciar en background con logs
npm run build           # Build de producción
npm run start           # Iniciar servidor producción
npm run lint            # Linting
npm run test            # Ejecutar tests (Vitest)
npm run setup           # Instalar deps + Prisma generate + migrate
npm run db:reset        # Resetear base de datos
```

## Archivos Críticos

| Archivo | Descripción |
|---------|-------------|
| `apps/uigen/prisma/schema.prisma` | Modelo de datos |
| `apps/uigen/src/lib/provider.ts` | Configuración del AI provider (Claude) |
| `apps/uigen/src/app/api/chat/route.ts` | Endpoint principal del chat AI |
| `apps/uigen/src/middleware.ts` | Middleware de Next.js |
| `apps/uigen/src/lib/file-system.ts` | Sistema de archivos virtual |

Patrones de Código

### Conventional Commits
Usar **Commitizen** con `cz-conventional-changelog`:
```
<tipo>(<alcance>): <descripción>

Tipos: feat, fix, docs, style, refactor, test, chore
Ejemplo: docs(readme): update UIGen title with Claude 101 course info
```

### Estructura de Componentes
- Componentes de UI base en `src/components/ui/`
- Componentes de features en subdirectorios (chat, editor, preview)
- Usar **Radix UI** para componentes accesibles
- Estilos con **Tailwind CSS v4** (no usar CSS Modules)

### AI Integration
- Vercel AI SDK para streaming de respuestas
- Anthropic Claude como modelo subyacente
- Herramientas custom para manipulación de archivos (file-manager, str-replace)

Configuración de Entorno

**⚠️ NUNCA hacer commit de archivos .env** (ya están en .gitignore)

El proyecto funciona sin API key (retorna código estático).
