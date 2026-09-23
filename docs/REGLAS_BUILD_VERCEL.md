# Reglas que rompen el build en Vercel (KOLLA)

Este proyecto corre `next build --turbopack` en Vercel, y eso ejecuta **dos
validadores en cascada** antes de compilar: TypeScript en modo `strict` y
ESLint con los presets de Next.js. Un error en cualquiera de los dos frena
el deploy completo (no es un warning, es build-fatal).

Config activa (fuente real, no generica):
- `tsconfig.json` -> `"strict": true`
- `eslint.config.mjs` -> extiende `next/core-web-vitals` y `next/typescript`

---

## 1. TypeScript strict -- no implicit `any`

**Regla:** todo parametro de funcion debe tener un tipo explicito. No se
puede dejar `function foo(x) {}` sin anotar `x`.

Rompe el build:
```ts
function normalizeStr(s) {
  return (s || "").toString().toLowerCase();
}
```

Pasa:
```ts
function normalizeStr(s: string) {
  return (s || "").toString().toLowerCase();
}
```

Si de verdad no sabes el tipo todavia (prototipo rapido), usar `any` es
valido para TS strict, **pero dispara la regla #2 de ESLint** -- ver abajo.

---

## 2. ESLint `@typescript-eslint/no-explicit-any` (viene de `next/typescript`)

**Regla:** prohibe usar `any` explicito en el codigo. Esto choca directo
con la solucion rapida de la regla #1.

Rompe el build (aunque TS lo acepte):
```ts
function normalizeStr(s: any) { ... }
```

Opciones para pasar, de mejor a peor practica:
1. **Tipar de verdad** (lo correcto a mediano plazo):
   ```ts
   function normalizeStr(s: string) { ... }
   function filterChapters(story: Story, query: string, onlyPublished: boolean, sortBy: SortKey) { ... }
   ```
2. Usar `unknown` en vez de `any` cuando el tipo real varia, y angostarlo
   con checks (`typeof`, `in`, etc.) antes de usarlo.
3. Desactivar la regla puntualmente, solo cuando es un archivo legacy que
   ya se sabe que se va a refactorizar (esto es lo que se hizo en
   `capitulos.tsx` para destrabar el deploy):
   ```ts
   /* eslint-disable @typescript-eslint/no-explicit-any */
   ```
   Poner el comentario justo debajo de `"use client";`, con una nota de
   por que esta ahi. **No es solucion definitiva**, es parche para no
   bloquear produccion mientras no se tipa el archivo completo.

---

## 3. ESLint `react/no-unescaped-entities` (viene de `next/core-web-vitals`)

**Regla:** no se pueden poner comillas dobles `"`, comillas simples `'`,
`>`, etc. sueltas dentro de texto JSX (fuera de un string de JS). El
parser de React las puede confundir con el cierre de un atributo o tag.

Rompe el build:
```tsx
<p>Puedes modificar "generos" y "etiquetas" ...</p>
<div>Sin resultados para "{query}"</div>
```

Pasa:
```tsx
<p>Puedes modificar &quot;generos&quot; y &quot;etiquetas&quot; ...</p>
<div>Sin resultados para &quot;{query}&quot;</div>
```

Tabla rapida de reemplazo:

| Caracter | Entidad HTML |
|---|---|
| `"` | `&quot;` |
| `'` | `&apos;` (o `&#39;`) |
| `<` | `&lt;` |
| `>` | `&gt;` |

Nota: esto solo aplica a texto que queda como *children* de JSX. Dentro de
un string normal de JS/TS (`const x = "hola"`) las comillas van normales,
sin escapar.

---

## 4. ESLint eslint-comment / directivas sin uso

**Regla:** si pones un `{/* eslint-disable-next-line regla-x */}` pero esa
linea en realidad no dispara esa regla, ESLint marca la directiva como
"unused" (warning, no siempre build-fatal, pero mejor evitarlo).

Revisar que cada `eslint-disable-next-line` realmente este silenciando
algo antes de dejarlo en el codigo. Si ya no aplica, borrarlo.

---

## 5. Imports rotos / modulos inexistentes

**No es una regla de lint**, es error de compilacion de Next/Turbopack,
pero rompe el build igual y es facil de meter sin querer (codigo
copiado de una plantilla, componente a medio integrar, etc.):

```
Cannot find module '@/components/algo/que-no-existe'
```

Antes de pushear un componente nuevo copiado de otro lado, verificar que
**todos** sus imports (`@/...`) apunten a archivos que si existen en el
repo. Si el componente no se usa en ninguna pagina todavia, mejor no
mergearlo hasta que este completo, o dejarlo como stub minimo.

---

## 6. Contratos de tipos entre componentes (props/contexts)

Si un componente (ej. `theme-toggle.tsx`) espera una propiedad de un
Context (`toggleTheme`) que el Provider (`theme-provider.tsx`) todavia no
expone, TypeScript lo marca como error en build, no solo en el editor.

Antes de usar algo de un hook/context (`useTheme()`, `useAuth()`, etc.),
confirmar que esa propiedad ya esta definida en el `interface`/`type` del
contexto y que el `Provider` la esta pasando en su `value={{ ... }}`.

---

## Checklist rapido antes de pushear (para no depender del build de Vercel)

Correr localmente antes de cada push:

```bash
npm run lint
npx tsc --noEmit
```

Si ambos pasan limpio en local, el build de Vercel casi seguro tambien
pasa (mismo Next.js, mismo `tsconfig.json`, mismo `eslint.config.mjs`).
Esto ahorra el ciclo completo de "push -> esperar build -> leer log -> fix ->
push de nuevo" que hicimos varias veces en esta sesion.

---

## 7. Callbacks inline (.filter/.map/.some/.sort) en archivos legacy sin tipos

Si un archivo entero maneja datos sin tipos definidos (parametros de
funcion en `any`, sin interfaces `Story`/`Chapter`, etc.), cada
funcion flecha inline que opera sobre esos datos tambien cae en
"implicit any", una por una:

```ts
function filterChapters(story: any, ...) {
  let arr = (story?.chapters || []).filter((c) => { ... }); // c: implicit any
}
```

Corregirlas de a una (`(c: any) => ...`) funciona pero es un ciclo sin fin
en archivos grandes: cada build revela la siguiente. Para un archivo que
ya se declaro legacy/sin-tipos desde su comentario de cabecera, la salida
practica es desactivar el chequeo de tipos en todo el archivo:

```ts
// @ts-nocheck
```

Debe ir como de las primeras lineas del archivo (antes de cualquier
codigo). Esto es un parche temporal, no una solucion definitiva: la
correccion real es definir `interface Story { ... }`, `interface Chapter
{ ... }` y tipar el archivo completo. Mientras eso no se haga, `@ts-nocheck`
evita que cada callback nuevo tumbe el build en Vercel.

**Ojo:** `@ts-nocheck` apaga TODO el chequeo de tipos del archivo, no solo
los `any` implicitos. Usalo solo en archivos ya identificados como
legacy/prototipo, nunca en codigo nuevo escrito con TypeScript real.
