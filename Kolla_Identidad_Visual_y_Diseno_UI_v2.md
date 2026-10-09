# KOLLA — Sistema de identidad visual y diseño UI
**Versión:** 2.0  
**Dirección visual:** Terracota Editorial  
**Modos contemplados:** Claro y oscuro  
**Logotipo:** Se conserva el sol andino.

## 1. Objetivo

Unificar la identidad visual de Kolla para una plataforma de lectura, escritura y comunidad. La experiencia debe sentirse cálida, cultural, editorial, moderna, inclusiva y agradable para públicos diversos.

Principios:
- **Editorial:** composición y tipografía inspiradas en publicaciones literarias.
- **Andina:** conservar el sol andino como símbolo distintivo.
- **Humana:** priorizar las historias y las personas.
- **Moderna:** componentes claros y fáciles de usar.
- **Inclusiva:** evitar una estética asociada exclusivamente a un género.
- **Legible:** comprobar el contraste de textos, controles y estados.

## 2. Logotipo

Se conserva el símbolo del **sol andino** del logotipo actual.

Variantes recomendadas:
1. **Horizontal:** símbolo a la izquierda y KOLLA a la derecha.
2. **Vertical:** símbolo encima del nombre.
3. **Isotipo:** solo el sol andino para favicon y avatar de aplicación.

Uso:
- Modo claro: símbolo terracota y nombre en carbón.
- Modo oscuro: símbolo terracota claro y nombre en marfil.
- Mantener proporciones y espacio libre alrededor del logo.
- No añadir sombras, biseles ni degradados al logotipo principal.
- Evitar tamaños donde se pierdan los detalles del símbolo.

## 3. Paleta de colores — modo claro

La paleta **Terracota Editorial** combina fondos luminosos con terracota, azul profundo, ocre y verde.

| Token | Nombre | HEX | Uso |
|---|---|---|---|
| `primary` | Terracota profundo | `#A85F55` | Botones primarios, navegación activa |
| `primary-hover` | Terracota oscuro | `#934F47` | Hover y estados activos |
| `primary-soft` | Terracota suave | `#C98A7D` | Etiquetas y detalles suaves |
| `accent` | Ocre dorado | `#D9A441` | Valoraciones y acentos puntuales |
| `deep` | Azul profundo | `#264653` | Contraste y elementos de apoyo |
| `background` | Marfil cálido | `#F8F3EE` | Fondo general |
| `surface` | Blanco | `#FFFFFF` | Tarjetas, formularios, menús |
| `surface-soft` | Marfil rosado suave | `#F4E8E4` | Bloques secundarios |
| `text` | Carbón | `#29282A` | Texto principal |
| `text-secondary` | Gris cálido | `#6F6662` | Descripciones y metadatos |
| `neutral` | Gris cálido medio | `#A69B96` | Elementos secundarios |
| `border` | Borde cálido | `#E8DED8` | Separadores y contornos |
| `success` | Verde suave | `#4F8068` | Estados positivos |
| `info` | Azul medio | `#527A9E` | Información y enlaces informativos |
| `warning` | Ocre dorado | `#D9A441` | Advertencias |
| `error` | Rojo suave | `#B85C5C` | Errores y acciones fallidas |

## 4. Paleta de colores — modo oscuro

El modo oscuro es una segunda presentación de la misma identidad. No se deben invertir los colores automáticamente: se usan fondos carbón, superficies diferenciadas y tonos de marca adaptados para mantener la legibilidad.

| Token | Nombre | HEX | Uso |
|---|---|---|---|
| `primary` | Terracota claro | `#C4715E` | Botones principales y selección |
| `primary-hover` | Terracota luminoso | `#D18470` | Hover y foco |
| `primary-soft` | Terracota suave | `#D79A86` | Etiquetas y acentos secundarios |
| `accent` | Ocre claro | `#E0B15F` | Valoraciones y destacados |
| `deep` | Azul profundo adaptado | `#3F6F83` | Elementos de apoyo |
| `background` | Carbón profundo | `#121212` | Fondo general |
| `surface` | Gris carbón | `#1E1E1E` | Tarjetas y paneles |
| `surface-raised` | Gris cálido elevado | `#2A2A2A` | Menús y superficies elevadas |
| `text` | Marfil | `#F5F1E9` | Texto principal |
| `text-secondary` | Gris claro | `#B7ADA7` | Descripciones y metadatos |
| `neutral` | Gris medio | `#A9A3A0` | Elementos secundarios |
| `border` | Borde oscuro | `#3A3A3A` | Separadores y contornos |
| `success` | Verde suave adaptado | `#5A987A` | Estados positivos |
| `info` | Azul medio adaptado | `#6FA3C4` | Información y enlaces |
| `warning` | Ocre claro | `#E0B15F` | Advertencias |
| `error` | Rojo suave adaptado | `#E07B7B` | Errores |

Reglas para modo oscuro:
- No usar negro puro `#000000` como fondo de toda la aplicación.
- Diferenciar fondo, tarjetas y superficies elevadas.
- Usar marfil para texto principal y gris claro para metadatos.
- Mantener el terracota como color de marca, ajustando su luminosidad si hace falta.
- Evitar grandes áreas de ocre o terracota saturados.
- Usar bordes discretos y sombras suaves.
- Añadir un overlay a imágenes cuando sea necesario para asegurar la legibilidad del texto.

## 5. Proporción de color

Como punto de partida:
- **60 %:** fondos y superficies neutras.
- **30 %:** colores de identidad, principalmente terracota y azul profundo.
- **10 %:** acentos como ocre, verde y azul informativo.

Es una guía flexible: el terracota debe destacar sin pintar toda la interfaz.

## 6. Tipografía

- **Playfair Display:** H1–H3, títulos de historias, frases editoriales y titulares.
- **DM Sans:** navegación, botones, formularios, metadatos, etiquetas, descripciones y controles.

| Elemento | Familia | Peso sugerido |
|---|---|---|
| H1 | Playfair Display | Bold |
| H2 | Playfair Display | SemiBold/Bold |
| H3 | Playfair Display | SemiBold |
| Cuerpo | DM Sans | Regular |
| Texto destacado | DM Sans | Medium |
| Botones | DM Sans | SemiBold |
| Metadatos | DM Sans | Regular |

## 7. Botones

### Primario
- Claro: fondo `#A85F55`, texto blanco, hover `#934F47`.
- Oscuro: fondo `#C4715E`, texto blanco, hover `#D18470`.
- Usos: **Explorar historias**, **Leer ahora**, **Publicar**, **Seguir**.

### Secundario
- Claro: fondo transparente o blanco, borde terracota, texto `#934F47`.
- Oscuro: fondo transparente o `#1E1E1E`, borde `#C4715E`, texto `#E7A18F`.
- Usos: acciones importantes no prioritarias, como **Escribir ahora**.

### Medidas
- Altura mínima recomendada: 40–44 px.
- Radio: 10–12 px.
- Estados hover, foco y deshabilitado claramente diferenciados.

## 8. Tarjetas y contenedores

**Modo claro**
- Fondo `#FFFFFF`, borde `#E8DED8`, radio 14–18 px y sombra sutil.

**Modo oscuro**
- Fondo `#1E1E1E`, superficie elevada `#2A2A2A`, borde `#3A3A3A`, radio 14–18 px.
- Priorizar las diferencias de superficie y bordes discretos sobre sombras fuertes.

Las tarjetas de historias priorizan portada, título, autor, valoración y acción para guardar.

## 9. Navegación

Secciones principales:
- Inicio
- Explorar
- Escribir
- Comunidad
- Notificaciones

Biblioteca personal:
- Favoritos
- Listas
- Historial

Estados:
- Claro activo: fondo `#A85F55`, texto e icono blancos.
- Oscuro activo: fondo `#A84F40` o `#C4715E` según el componente, texto e icono blancos.
- Claro normal: texto `#29282A`, iconos `#6F6662`.
- Oscuro normal: texto `#F5F1E9`, iconos `#B7ADA7`.

## 10. Géneros y etiquetas

Los colores de género complementan la marca; no deben reemplazar la paleta estructural ni crear asociaciones rígidas entre géneros literarios y personas.

| Género | Color sugerido | HEX |
|---|---|---|
| Fantasía | Azul medio | `#527A9E` |
| Romance | Terracota suave | `#C98A7D` |
| Misterio | Gris oscuro | `#45413F` |
| Ciencia ficción | Azul profundo | `#264653` |
| Cultura | Ocre | `#D9A441` |
| Crecimiento | Verde suave | `#4F8068` |
| Aventura | Terracota profundo | `#A85F55` |

En modo oscuro, adaptar el fondo de las etiquetas. Incluir texto o icono además del color.

## 11. Imágenes y dirección de arte

Temas:
- Paisajes andinos, arquitectura y espacios culturales.
- Bibliotecas, rincones de lectura y personas leyendo o escribiendo.
- Caminos, viajes, naturaleza y escenas de comunidad.
- Ilustraciones editoriales.

Tratamiento:
- Tonos tierra, terracota y azul profundo.
- Luz cálida y contraste moderado.
- Evitar neones, saturación excesiva y fotografía corporativa genérica.
- Si el texto se superpone a una imagen, añadir un degradado suficiente para asegurar contraste.

```css
.hero-overlay {
  background: linear-gradient(
    90deg,
    rgba(24, 20, 19, 0.78),
    rgba(24, 20, 19, 0.12)
  );
}
```

## 12. Iconografía

Iconos lineales, sencillos y consistentes en grosor y tamaño: Inicio, Explorar, Escribir, Comunidad, Notificaciones, Favoritos, Biblioteca, Compartir, Comentarios y Guardar.

- Claro: color base `#29282A`, activo `#A85F55`.
- Oscuro: color base `#F5F1E9`, activo `#D18470`.

## 13. Formularios e inputs

| Propiedad | Modo claro | Modo oscuro |
|---|---|---|
| Fondo | `#FFFFFF` | `#1E1E1E` |
| Texto | `#29282A` | `#F5F1E9` |
| Borde | `#E8DED8` | `#3A3A3A` |
| Placeholder | `#6F6662` | `#B7ADA7` |
| Foco | `#A85F55` | `#D18470` |

Los inputs deben tener etiquetas accesibles; no depender solo del placeholder.

## 14. Estados del sistema

| Estado | Modo claro | Modo oscuro |
|---|---|---|
| Éxito | `#4F8068` | `#5A987A` |
| Información | `#527A9E` | `#6FA3C4` |
| Advertencia | `#D9A441` | `#E0B15F` |
| Error | `#B85C5C` | `#E07B7B` |

Cada estado debe incluir texto o icono además del color.

## 15. Bordes, radios y sombras

Radios sugeridos:
- Botones e inputs: 10–12 px.
- Tarjetas: 14–18 px.
- Modales: 18–24 px.
- Imágenes: 12–16 px.
- Avatares: 50 %.

Bordes:
- Claro: `#E8DED8`.
- Oscuro: `#3A3A3A`.

Sombras:
```css
/* Modo claro */
box-shadow: 0 4px 18px rgba(41, 40, 42, 0.06);

/* Modo oscuro */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
```

No usar sombras como único método para distinguir componentes.

## 16. Diseño responsive

### Desktop
- Sidebar permanente.
- Barra superior con búsqueda, notificaciones y perfil.
- Contenido principal organizado en secciones.
- Hero destacado y tarjetas de historias.
- Ancho de lectura cómodo.

### Mobile
Navegación inferior sugerida:

`Inicio | Explorar | Escribir | Comunidad | Biblioteca`

- Botón de escribir fácil de identificar.
- Tarjetas compactas con áreas táctiles suficientes.
- Controles de lectura accesibles sin tapar el texto.
- Mantener coherencia entre ambos temas.

## 17. Estructura sugerida de Inicio

1. Barra superior con logo, búsqueda, notificaciones y perfil.
2. Historia destacada.
3. Recomendaciones personalizadas.
4. Géneros populares.
5. Historias en tendencia.
6. Autores destacados.
7. Actividad reciente de la comunidad.

```text
KOLLA      [Buscar historias, autores...]       [Notificaciones] [Perfil]

┌───────────────────────────────────────────────────────────────┐
│ HISTORIA DESTACADA                                             │
│ Historias que nos conectan                                    │
│ [Explorar historias]                                          │
└───────────────────────────────────────────────────────────────┘

Recomendado para ti
[Historia] [Historia] [Historia] [Historia]

Géneros populares
[Fantasía] [Romance] [Misterio] [Cultura] [Ciencia ficción]

Comunidad
[Autores destacados] [Actividad reciente]
```

## 18. Accesibilidad

- Comprobar contraste entre texto y fondo antes de implementar cada combinación.
- No usar el color como único indicador de estado.
- Mantener el foco visible para navegación con teclado.
- Proporcionar etiquetas accesibles a iconos y controles.
- Permitir ampliación del texto.
- Revisar especialmente botones, placeholders, etiquetas y texto sobre imágenes.

Los valores de esta guía son una base visual y deben validarse con pruebas de contraste durante la implementación.

## 19. Variables CSS por tema

```css
/* Tema claro */
:root,
[data-theme="light"] {
  color-scheme: light;
  --kolla-primary: #A85F55;
  --kolla-primary-hover: #934F47;
  --kolla-primary-soft: #C98A7D;
  --kolla-accent: #D9A441;
  --kolla-deep: #264653;

  --kolla-background: #F8F3EE;
  --kolla-surface: #FFFFFF;
  --kolla-surface-soft: #F4E8E4;
  --kolla-surface-raised: #FFFFFF;

  --kolla-text: #29282A;
  --kolla-text-secondary: #6F6662;
  --kolla-neutral: #A69B96;
  --kolla-border: #E8DED8;

  --kolla-success: #4F8068;
  --kolla-info: #527A9E;
  --kolla-warning: #D9A441;
  --kolla-error: #B85C5C;
}

/* Tema oscuro */
[data-theme="dark"] {
  color-scheme: dark;
  --kolla-primary: #C4715E;
  --kolla-primary-hover: #D18470;
  --kolla-primary-soft: #D79A86;
  --kolla-accent: #E0B15F;
  --kolla-deep: #3F6F83;

  --kolla-background: #121212;
  --kolla-surface: #1E1E1E;
  --kolla-surface-soft: #24201F;
  --kolla-surface-raised: #2A2A2A;

  --kolla-text: #F5F1E9;
  --kolla-text-secondary: #B7ADA7;
  --kolla-neutral: #A9A3A0;
  --kolla-border: #3A3A3A;

  --kolla-success: #5A987A;
  --kolla-info: #6FA3C4;
  --kolla-warning: #E0B15F;
  --kolla-error: #E07B7B;
}
```

Ejemplo de aplicación:

```css
body {
  background: var(--kolla-background);
  color: var(--kolla-text);
  font-family: "DM Sans", sans-serif;
}

.card {
  background: var(--kolla-surface);
  border: 1px solid var(--kolla-border);
  border-radius: 16px;
}

.button-primary {
  background: var(--kolla-primary);
  color: #FFFFFF;
  border-radius: 11px;
}

.button-primary:hover {
  background: var(--kolla-primary-hover);
}

h1, h2, h3, .story-title {
  font-family: "Playfair Display", serif;
}
```

## 20. Consistencia de marca

- El logotipo conserva el sol andino.
- Terracota Editorial es la identidad en ambos temas.
- El modo oscuro adapta los valores para legibilidad; no constituye una marca distinta.
- Las categorías pueden tener etiquetas propias, sin alterar los colores estructurales.
- Los estados funcionales conservan significados consistentes.
- Las imágenes aportan variedad sin romper la identidad de Kolla.

## 21. Resumen de decisiones

| Decisión | Definición |
|---|---|
| Identidad | Terracota Editorial |
| Símbolo | Se conserva el sol andino |
| Modo claro | Marfil, blanco, terracota, ocre, azul y verde |
| Modo oscuro | Carbón, superficies oscuras, terracota adaptado, ocre, azul y verde |
| Títulos | Playfair Display |
| Interfaz | DM Sans |
| Personalidad | Cultural, cálida, editorial, moderna e inclusiva |
| Experiencia | Lectura, escritura, descubrimiento y comunidad |

**Kolla — Historias que nos conectan.**

La experiencia debe sentirse como entrar a una biblioteca contemporánea: acogedora, cultural, cómoda para leer y con ganas de quedarse.
