# Taquería Miki — Sitio web para Visual Studio Code

## Cómo abrir
1. Descomprime `Taqueria_Miki_VSCode.zip`.
2. Abre Visual Studio Code.
3. Selecciona **Archivo > Abrir carpeta...** y elige `taqueria_miki_vscode`.
4. Abre `index.html`.
5. Si tienes la extensión **Live Server**, haz clic derecho en `index.html` y elige **Open with Live Server**. También puedes abrir `index.html` directamente en tu navegador.

## Archivos
- `index.html`: página de inicio.
- `menu.html`: menú con categorías y precios de ejemplo.
- `nosotros.html`: historia y valores.
- `contacto.html`: formulario de contacto.
- `css/styles.css`: diseño adaptable para computadora y celular.
- `js/main.js`: menú móvil, redes sociales y formulario que prepara un mensaje para WhatsApp.
- `img/`: imágenes y logo local.

## IMPORTANTE: personalizar contacto
Abre `js/main.js` y cambia:
- `WHATSAPP_NUMBER` por el número real del administrador, con código de país y solo números.
- Los enlaces de `SOCIAL_LINKS` por las cuentas reales de Facebook, Instagram y TikTok.

También cambia en las páginas `Av. Principal 123`, `Tu Ciudad, México`, teléfono y correo por los datos reales. El mapa es ilustrativo y el enlace abre Google Maps; para mostrar el mapa exacto, sustituye ese bloque por un mapa incrustado de Google Maps.

Los precios del menú son ejemplos, actualízalos antes de publicar.
El formulario abre WhatsApp con el texto preparado, pero el usuario debe pulsar Enviar dentro de WhatsApp. No requiere servidor ni base de datos.
