# Paleta Kolla - Terracota Editorial

## Colores Principales

### 🟫 Terracota (Primario)
- **Nombre**: Terracota Profundo
- **Hex**: `#A85F55`
- **RGB**: `rgb(168, 95, 85)`
- **Uso**: CTAs, navegación activa, botones principales, iconos activos
- **Hover**: `#934F47` (más oscuro)
- **Alt Soft**: `#C98A7D` (más claro, estados secundarios)

```css
--kolla-primary: #A85F55;
--kolla-primary-dark: #934F47;
--kolla-primary-soft: #C98A7D;
```

### 🟨 Ocre Dorado (Acento)
- **Nombre**: Ocre Dorado
- **Hex**: `#D9A441`
- **RGB**: `rgb(217, 164, 65)`
- **Uso**: Ratings, destacados, pequeños acentos, bordes especiales
- **Especial**: Warnings/Avisos en sistema de estados

```css
--kolla-accent: #D9A441;
--kolla-warning: #D9A441;
```

### 🔵 Azul Profundo (Balance)
- **Nombre**: Azul Profundo / Deep Blue
- **Hex**: `#264653`
- **RGB**: `rgb(38, 70, 83)`
- **Uso**: Títulos destacados, elementos importantes, contraste fuerte

```css
--kolla-deep: #264653;
```

## Colores Funcionales

### 🟩 Verde Suave (Éxito)
- **Hex**: `#4F8068`
- **Uso**: Estados positivos, acciones exitosas

```css
--kolla-success: #4F8068;
```

### 🔷 Azul Medio (Información)
- **Hex**: `#527A9E`
- **Uso**: Enlaces, información, estados informativos

```css
--kolla-info: #527A9E;
```

### 🔴 Rojo Suave (Error)
- **Hex**: `#B85C5C`
- **Uso**: Errores, validaciones negativas, estados críticos

```css
--kolla-error: #B85C5C;
```

## Neutros y Fondos

### 🟡 Marfil Cálido (Fondo Principal)
- **Hex**: `#F8F3EE`
- **Uso**: Fondo general de la aplicación, páginas, secciones amplias
- **Alt**: `#F4E8E4` (variante secundaria para separar secciones)

```css
--kolla-background: #F8F3EE;
--kolla-background-secondary: #F4E8E4;
```

### ⚪ Blanco (Superficie)
- **Hex**: `#FFFFFF`
- **Uso**: Cards, modales, formularios, menús, paneles, superficies

```css
--kolla-surface: #FFFFFF;
```

### ⬛ Carbón (Texto Principal)
- **Hex**: `#29282A`
- **Uso**: Texto principal, títulos en fondo claro

```css
--kolla-text: #29282A;
```

### ◻️ Gris Cálido (Neutro/Secundario)
- **Hex**: `#A69B96`
- **Uso**: Texto secundario, bordes, elementos deshabilitados

```css
--kolla-neutral: #A69B96;
--kolla-text-secondary: #5E5855;
```

### ▫️ Borde Suave
- **Hex**: `#E8DED8`
- **Uso**: Bordes principales (evitar negros puros)

```css
--kolla-border: #E8DED8;
```

## Modo Oscuro

### Valores Ajustados para Dark Mode:
```css
--kolla-primary: #C97869;        /* Terracota más claro */
--kolla-background: #1E2021;     /* Oscuro profundo */
--kolla-surface: #29282A;        /* Oscuro medio */
--kolla-text: #F8F3EE;          /* Claro cálido */
--kolla-border: #3A3935;         /* Borde oscuro */
```

## Paleta 60/30/10

### Distribución Recomendada:
- **60%** - Fondos neutros
  - `#F8F3EE` (Marfil)
  - `#FFFFFF` (Blanco)
  
- **30%** - Identidad Kolla
  - `#A85F55` (Terracota primario)
  - `#264653` (Azul profundo)
  - `#C98A7D` (Terracota suave)
  
- **10%** - Acentos
  - `#D9A441` (Ocre dorado)
  - `#4F8068` (Verde suave)
  - `#527A9E` (Azul medio)

## Tipografía Asociada

### Playfair Display (Serif)
- **Uso**: H1, H2, H3, Títulos de historias, Frases editoriales
- **Peso**: 400, 500, 600, 700 (Bold)

### DM Sans (Sans-serif)
- **Uso**: Navegación, Botones, Formularios, Texto general
- **Peso**: 400 (Regular), 500 (Medium), 600 (Semibold)

## Casos de Uso por Componente

### Botones
- **Primario**: `#A85F55` fondo, `#FFFFFF` texto
- **Secundario**: Transparente, `#A85F55` border y texto
- **Terciario**: `#F4E8E4` fondo, `#6F433D` texto

### Cards
- **Fondo**: `#FFFFFF`
- **Border**: `#E8DED8`
- **Sombra**: `0 4px 18px rgba(41, 40, 42, 0.06)`
- **Radius**: 14-18px

### Navegación
- **Activo**: `#A85F55` fondo, `#FFFFFF` texto
- **Normal**: `#29282A` texto, `#5E5855` iconos

### Inputs/Formularios
- **Border**: `#E8DED8`
- **Focus**: `#A85F55` (borde), `rgba(168, 95, 85, 0.1)` (shadow)
- **Background**: `#FFFFFF` o `#F8F3EE`

## Ejemplos de Uso en CSS

```css
/* Botón primario */
.btn-primary {
  background-color: var(--kolla-primary);
  color: var(--kolla-surface);
  border-radius: 10px;
}

.btn-primary:hover {
  background-color: var(--kolla-primary-dark);
}

/* Card */
.card {
  background: var(--kolla-surface);
  border: 1px solid var(--kolla-border);
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(41, 40, 42, 0.06);
}

/* Badge de éxito */
.badge-success {
  background: var(--kolla-success);
  color: var(--kolla-surface);
}

/* Texto secundario */
.text-secondary {
  color: var(--kolla-neutral);
}
```

## Referencia: Diseño Original

Ver archivo `deseño.png` para ejemplos visuales completos de cómo se implementa la paleta en componentes reales.

---

**Versión**: 1.0
**Sistema de Diseño**: Kolla Terracota Editorial
**Actualizado**: Octubre 2026
