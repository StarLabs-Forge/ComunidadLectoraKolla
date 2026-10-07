# Rama redising - Instrucciones de Uso

## Descripción
La rama `redising` contiene la implementación completa de la nueva paleta de colores **Kolla Terracota Editorial** según la especificación en `Kolla_Actualizacion_Paleta_y_Diseno.md`.

## Configuración Inicial

### 1. Cambiar a la rama redising
```bash
git checkout redising
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```

El proyecto se ejecutará en `http://localhost:3000`

## Cambios Visuales Principales

### Colores Reemplazados
- ❌ Verdes antiguos (#187A25, #165C1E, #4CD23D)
- ✅ Nuevos Terracota (#A85F55, #934F47, #C98A7D)

### Componentes Afectados
1. **Landing Page**
   - Hero section con gradiente Terracota
   - Botones con color primario

2. **Header/Navegación**
   - Background suave
   - Menús desplegables actualizados

3. **Biblioteca/Lecturas**
   - Cards de libros con paleta suave
   - Filtros editorialistas
   - Barra de búsqueda mejorada

4. **Autenticación**
   - Formularios con nuevos colores
   - Spinner de carga Terracota

5. **Footer**
   - Actualización de colores base

## Variables CSS Disponibles

Todas las variables están definidas en `src/app/globals.css`:

```css
--kolla-primary: #A85F55;
--kolla-primary-dark: #934F47;
--kolla-primary-soft: #C98A7D;
--kolla-accent: #D9A441;
--kolla-deep: #264653;
--kolla-background: #F8F3EE;
--kolla-surface: #FFFFFF;
--kolla-text: #29282A;
--kolla-neutral: #A69B96;
--kolla-success: #4F8068;
--kolla-info: #527A9E;
--kolla-warning: #D9A441;
--kolla-error: #B85C5C;
--kolla-border: #E8DED8;
```

Puedes usar estas variables en componentes nuevos o existentes.

## Tipografía

Fuentes disponibles:
- **Playfair Display** (serif) - Títulos (H1, H2, H3)
- **DM Sans** (sans-serif) - Texto de interfaz

```css
/* En componentes React */
font-family: var(--font-playfair); /* Títulos */
font-family: var(--font-dm-sans);  /* Interfaz */
```

## Dark Mode

El proyecto soporta modo oscuro automáticamente. Las variables se actualizan en `.dark`:

```css
:root.dark {
  --kolla-primary: #C97869;
  --kolla-background: #1E2021;
  --kolla-surface: #29282A;
  /* ... más variables */
}
```

## Testing Visual

### Checklist de Elementos Clave:
- [ ] Hero section ve colores Terracota
- [ ] Botones primarios usan #A85F55
- [ ] Cards tienen bordes suaves #E8DED8
- [ ] Filtros/chips con paleta editorial
- [ ] Modo oscuro funciona correctamente
- [ ] Tipografía serif en títulos
- [ ] Tipografía sans-serif en interfaz

## Archivos de Referencia

1. **Especificación Completa**: `Kolla_Actualizacion_Paleta_y_Diseno.md`
2. **Imagen de Referencia**: `deseño.png`
3. **Resumen de Cambios**: `CAMBIOS_REDISING.md`

## Commits Realizados

1. `refactor: Implement Kolla Terracota Editorial color palette` 
   - Cambios globales de CSS y tipografía

2. `refactor: Update all remaining CSS files with Kolla color palette`
   - Reemplazo de colores verdes en 12+ archivos

3. `docs: Add summary of Kolla Terracota Editorial design changes`
   - Documentación de cambios

## Diferencia con main/develov

```bash
# Ver cambios específicos
git diff main..redising -- src/app/globals.css
git diff main..redising -- src/styles/globals.css

# Ver todos los archivos modificados
git diff --name-only main..redising
```

## Próximos Pasos después de Review

1. Hacer merge a `develov` cuando sea aprobado
2. Coordinar con equipo de diseño para validar
3. Hacer merge a `main` cuando esté listo para producción

## Soporte

Si encuentras problemas con los colores o tipografía:
1. Verifica que estés en rama `redising`
2. Revisa `CAMBIOS_REDISING.md` para lista completa de cambios
3. Compara con `deseño.png` para referencia visual

---

**Creado**: Octubre 2026
**Sistema de Diseño**: Kolla Terracota Editorial
