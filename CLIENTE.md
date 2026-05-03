# Guía de configuración por cliente

Sigue estos pasos cada vez que arranques un proyecto nuevo con este template.

---

## 1. Duplicar la carpeta

Copia esta carpeta completa y renómbrala con el nombre del cliente:
```
_template/          →   cliente-nombre-empresa/
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Configurar variables de entorno

Copia el archivo de ejemplo y rellénalo:
```bash
cp .env.local.example .env.local
```

Edita `.env.local`:
```
RESEND_API_KEY=re_...        ← API key del cliente en resend.com
CONTACT_EMAIL=email@cliente.com  ← Correo donde llegan los leads
```

---

## 4. Personalizar el contenido — `src/config/site.ts`

Este es el único archivo que necesitas editar para cambiar toda la identidad del sitio:

| Campo | Qué cambia |
|---|---|
| `name` | Logo y nombre en toda la web |
| `description` | Meta description de Google |
| `email` / `phone` | Datos de contacto |
| `navLinks` | Menú de navegación |
| `hero.*` | Título, descripción y CTAs del hero |
| `cta.*` | Sección de llamada a la acción final |
| `footerDescription` | Texto del footer |
| `og.*` | Título y descripción para redes sociales |

---

## 5. Subir imágenes

Coloca las imágenes del cliente en `public/images/` según esta estructura:

```
public/images/
├── hero/          → Imagen principal (1920×1080 px, .jpg)
├── servicios/     → Fotos de servicios (800×600 px, .jpg)
├── equipo/        → Fotos de personas (600×600 px, .jpg)
├── clientes/      → Logos de clientes (SVG preferible)
├── testimonios/   → Avatares (200×200 px, .jpg)
└── og/
    └── og-image.jpg   → Previsualización en redes (1200×630 px)
```

Comparte las fotos originales sin comprimir — se configuran con `next/image` automáticamente.

---

## 6. Cambiar el color primario — `src/app/globals.css`

Busca la línea `--primary:` en `:root` y reemplaza el valor oklch:

```css
/* Azul (default) */
--primary: oklch(0.546 0.215 262.881);

/* Ejemplos de otros colores */
--primary: oklch(0.55 0.22 145);   /* Verde */
--primary: oklch(0.55 0.22 30);    /* Naranja */
--primary: oklch(0.45 0.22 300);   /* Violeta */
--primary: oklch(0.45 0.22 0);     /* Rojo */
```

Puedes generar colores oklch en: https://oklch.com

---

## 7. Editar secciones de contenido

Cada sección tiene su archivo en `src/components/sections/`:

| Archivo | Sección |
|---|---|
| `Hero.tsx` | Portada principal |
| `ValueProp.tsx` | Propuesta de valor (antes/después) |
| `Features.tsx` | Grid de características/servicios |
| `ContactForm.tsx` | Formulario con industrias |
| `CTA.tsx` | Llamada a la acción final |

Los textos dentro de cada sección que no vengan de `site.ts` se editan directamente en el componente.

---

## 8. Verificar antes de entregar

- [ ] `npm run build` sin errores
- [ ] Formulario funciona y llega el correo
- [ ] OG image subida en `public/images/og/og-image.jpg`
- [ ] `.env.local` configurado en el servidor de producción
- [ ] Dominio del cliente configurado en Resend (para envíos desde su dominio)

---

## Agregar nuevas secciones al template

Cuando construyas una sección nueva que quede bien para otro cliente:
1. Guárdala en `src/components/sections/`
2. Expórtala en `src/components/sections/index.ts`
3. Anótala aquí para recordar que existe

**Secciones disponibles:**
- `Hero` — portada
- `ValueProp` — propuesta de valor con comparativa
- `Features` — grid de servicios/características
- `ContactForm` — formulario con Resend
- `CTA` — llamada a la acción
- `Section` — wrapper genérico reutilizable

**Próximas secciones por agregar:**
- [ ] Testimonios con foto y cita
- [ ] FAQ con acordeón
- [ ] Precios con 3 planes
- [ ] Galería de proyectos
- [ ] Estadísticas animadas
