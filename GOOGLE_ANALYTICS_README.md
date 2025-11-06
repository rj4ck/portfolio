# Google Analytics - Guía de Implementación

## ✅ Configuración Completada

Tu Google Analytics está correctamente implementado con las siguientes características:

### 1. **Integración con Partytown**
- Los scripts de Google Analytics se ejecutan en un Web Worker separado
- Esto mejora el rendimiento al no bloquear el hilo principal
- Configurado en `astro.config.mjs` con `forward: ["dataLayer.push"]`

### 2. **Variables de Entorno**
- ID de medición: `PUBLIC_GA_MEASUREMENT_ID=G-TC899Q2DWH`
- Configurado en el archivo `.env`
- Se puede cambiar fácilmente sin modificar el código

### 3. **Solo en Producción**
- Google Analytics NO se carga en modo desarrollo (`npm run dev`)
- Solo se activa en builds de producción (`npm run build`)
- Esto evita contaminar las estadísticas con datos de desarrollo

## 📁 Archivos Modificados

1. **`src/components/GoogleAnalytics.astro`**
   - Componente principal de Google Analytics
   - Usa Partytown para optimización
   - Condición para renderizar solo en producción

2. **`astro.config.mjs`**
   - Configuración de Partytown
   - Forward de `dataLayer.push`

3. **`.env`**
   - Variable `PUBLIC_GA_MEASUREMENT_ID`

## 🧪 Cómo Verificar

### En Desarrollo
```bash
npm run dev
```
- Abre la consola del navegador
- Deberías ver: "Google Analytics deshabilitado en desarrollo o ID no configurado"
- Los scripts de GA NO se cargarán

### En Producción (Local)
```bash
npm run build
npm run preview
```
- Abre la consola del navegador (F12)
- Ve a la pestaña "Network"
- Busca peticiones a `googletagmanager.com`
- Deberías ver la carga de `gtag/js`

### En Producción (Desplegado)
1. Despliega tu sitio en GitHub Pages
2. Abre tu sitio en producción
3. Abre las DevTools (F12)
4. En la consola, escribe: `dataLayer`
5. Deberías ver un array con datos de Google Analytics

## 🔍 Verificar en Google Analytics

1. Ve a tu panel de [Google Analytics](https://analytics.google.com/)
2. Selecciona tu propiedad `G-TC899Q2DWH`
3. Ve a **Informes en tiempo real** (Realtime)
4. Abre tu sitio en producción en otra pestaña
5. Deberías ver tu visita aparecer en tiempo real

## 🚀 Eventos Personalizados (Opcional)

Si quieres rastrear eventos personalizados, puedes agregar en cualquier componente:

```javascript
<script>
  // Ejemplo: rastrear clic en botón
  document.querySelector('#mi-boton').addEventListener('click', () => {
    if (window.gtag) {
      gtag('event', 'click_button', {
        'event_category': 'engagement',
        'event_label': 'Mi Botón',
      });
    }
  });
</script>
```

## 📊 Métricas que se Rastrean Automáticamente

- ✅ Páginas vistas (page views)
- ✅ Sesiones de usuario
- ✅ Tiempo en la página
- ✅ Tasa de rebote
- ✅ Ubicación geográfica
- ✅ Dispositivo y navegador
- ✅ Fuente de tráfico

## 🔧 Troubleshooting

### No veo datos en Google Analytics
1. Verifica que estés viendo el sitio en **producción** (no desarrollo)
2. Espera 24-48 horas para datos históricos
3. Usa "Informes en tiempo real" para verificación inmediata
4. Verifica que el ID `G-TC899Q2DWH` sea correcto en `.env`

### Error de CORS o CSP
Si ves errores de seguridad, asegúrate de que tu `astro.config.mjs` no tenga políticas CSP que bloqueen Google Analytics.

### Los scripts no cargan
1. Verifica que Partytown esté instalado: `npm list @astrojs/partytown`
2. Limpia la caché: `rm -rf dist .astro`
3. Reconstruye: `npm run build`

## 🌟 Mejoras Opcionales

### 1. Consentimiento de Cookies (GDPR)
Si tienes usuarios en Europa, considera agregar un banner de consentimiento:

```astro
---
// src/components/CookieConsent.astro
---
<script>
  if (!localStorage.getItem('cookie-consent')) {
    // Mostrar banner
  }
</script>
```

### 2. Google Tag Manager
Para una gestión más avanzada de tags, considera migrar a Google Tag Manager.

## 📝 Notas Importantes

- El ID `G-TC899Q2DWH` es PÚBLICO (por eso el prefijo `PUBLIC_`)
- No es un secreto y puede estar en el código fuente
- Solo tú puedes ver los datos en tu cuenta de Google Analytics
- Partytown mejora el performance en ~50ms en tiempo de carga

## ✨ ¡Listo!

Tu Google Analytics está configurado correctamente. Ahora puedes:
1. Desplegar tu sitio
2. Verificar en "Informes en tiempo real"
3. Empezar a analizar el tráfico de tu portfolio

---

**Última actualización:** 2025-11-06
