# 🔧 Solución: Google Analytics en GitHub Pages

## ❌ Problema Identificado

Tu Google Analytics **NO estaba funcionando en GitHub Pages** porque:

1. ❌ El workflow de GitHub Actions no pasaba la variable `PUBLIC_GA_MEASUREMENT_ID` al build
2. ❌ Sin esta variable, el componente no renderizaba los scripts de Google Analytics

## ✅ Solución Aplicada

He modificado `.github/workflows/deploy.yml` para incluir la variable de entorno:

```yaml
- name: Build with Astro
  env:
    PUBLIC_GA_MEASUREMENT_ID: G-TC899Q2DWH  # ✅ AGREGADO
  run: |
    ${{ steps.detect-package-manager.outputs.runner }} astro build \
      --site "${{ steps.pages.outputs.origin }}" \
      --base "${{ steps.pages.outputs.base_path }}"
```

## 📝 Pasos para Desplegar

### 1. Commit y Push

```bash
git add .
git commit -m "fix: agregar Google Analytics a GitHub Pages"
git push origin main
```

### 2. Verificar el Build en GitHub Actions

1. Ve a tu repositorio en GitHub
2. Click en la pestaña **"Actions"**
3. Espera a que el workflow termine (círculo verde ✅)
4. Si falla, revisa los logs

### 3. Verificar en tu Sitio Desplegado

**Opción A: DevTools (Método rápido)**

1. Abre tu sitio: `https://rj4ck.github.io/portfolio/`
2. Presiona `F12` (DevTools)
3. Ve a **Console** y escribe: `window.dataLayer`
4. Deberías ver un array con datos de GA

**Opción B: Network Tab**

1. Abre tu sitio: `https://rj4ck.github.io/portfolio/`
2. Presiona `F12` (DevTools)
3. Ve a **Network** → filtra por `google`
4. Recarga la página (`Ctrl+R` o `Cmd+R`)
5. Deberías ver peticiones a `googletagmanager.com`

**Opción C: Código fuente**

1. Abre tu sitio: `https://rj4ck.github.io/portfolio/`
2. Click derecho → **Ver código fuente**
3. Busca (`Ctrl+F` o `Cmd+F`): `G-TC899Q2DWH`
4. Deberías ver el script de Google Analytics

### 4. Verificar en Google Analytics Dashboard

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Selecciona tu propiedad `G-TC899Q2DWH`
3. Ve a **Informes** → **Tiempo real**
4. Abre tu sitio en otra pestaña
5. Deberías verte aparecer en tiempo real (máximo 60 segundos de retraso)

## 🐛 Si Todavía No Funciona

### Check 1: Verifica que el workflow corrió
```bash
# En tu terminal local
git log --oneline -1
# Verifica que el último commit es el que incluye el fix
```

### Check 2: Verifica la variable en el HTML generado
Abre el código fuente de tu sitio en producción y busca:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TC899Q2DWH"></script>
```

Si **NO** lo ves:
- El workflow no corrió correctamente
- La variable de entorno no se pasó al build

### Check 3: Verifica que el ID de GA es correcto
```bash
# En tu terminal
cat .env | grep PUBLIC_GA_MEASUREMENT_ID
```

Debería mostrar: `PUBLIC_GA_MEASUREMENT_ID=G-TC899Q2DWH`

### Check 4: Limpia caché y reconstruye localmente
```bash
rm -rf dist .astro node_modules/.vite
PUBLIC_GA_MEASUREMENT_ID=G-TC899Q2DWH npm run build
npm run preview
```

Abre `http://localhost:4321` y verifica que Google Analytics cargue.

## 🔐 Alternativa: Usar GitHub Secrets (Más Seguro)

Aunque el ID de Google Analytics es público, puedes usar GitHub Secrets:

### 1. Crear el Secret en GitHub
1. Ve a tu repo → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `PUBLIC_GA_MEASUREMENT_ID`
4. Value: `G-TC899Q2DWH`
5. Click **Add secret**

### 2. Modificar el Workflow
```yaml
- name: Build with Astro
  env:
    PUBLIC_GA_MEASUREMENT_ID: ${{ secrets.PUBLIC_GA_MEASUREMENT_ID }}  # Usando secret
  run: |
    ${{ steps.detect-package-manager.outputs.runner }} astro build \
      --site "${{ steps.pages.outputs.origin }}" \
      --base "${{ steps.pages.outputs.base_path }}"
```

## 📊 Datos que Verás en Google Analytics

Después de desplegar, empezarás a ver:

- ✅ **Páginas vistas**: Cada vez que alguien visita tu portfolio
- ✅ **Usuarios activos**: Cuántos visitantes hay en tiempo real
- ✅ **Ubicación**: De qué país/ciudad visitan
- ✅ **Dispositivos**: Desktop, móvil, tablet
- ✅ **Fuentes de tráfico**: Google, directo, redes sociales, etc.
- ✅ **Páginas populares**: Qué páginas son más visitadas

**Nota:** Los datos históricos tardan 24-48 horas en procesarse completamente.

## 🎯 Próximos Pasos Opcionales

### 1. Rastrear eventos personalizados
Ejemplo: rastrear clics en botones de contacto

```astro
---
// src/components/ContactButton.astro
---
<button id="contact-btn">Contactar</button>

<script>
  document.getElementById('contact-btn')?.addEventListener('click', () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'contact_click', {
        'event_category': 'engagement',
        'event_label': 'Contact Button'
      });
    }
  });
</script>
```

### 2. Agregar Google Search Console
Para SEO y ver cómo te encuentran en Google.

### 3. Configurar Goals (Objetivos)
En Google Analytics, para rastrear conversiones específicas.

## ✅ Checklist Final

Antes de cerrar, verifica:

- [ ] Commit y push realizados
- [ ] GitHub Actions corrió exitosamente (círculo verde)
- [ ] Sitio abierto en producción
- [ ] DevTools muestra `window.dataLayer`
- [ ] Network muestra peticiones a `googletagmanager.com`
- [ ] Google Analytics muestra tráfico en tiempo real

---

**¡Listo!** Ahora tu Google Analytics debería funcionar perfectamente en GitHub Pages. 🎉
