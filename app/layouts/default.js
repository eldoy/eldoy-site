module.exports = async function($) {
  return /* html */`
    <!doctype html>
    <html lang="${ $.lang }">
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="${ $.page.description }">
        <title>${ $.page.title || '♥' } - Eldøy Projects</title>
        <link rel="stylesheet" href="/css/app.css" type="text/css">
        <link rel="icon" type="image/png" href="/img/favicon.png">
      </head>
      <body>
        <div class="lang">
          <a href="${ $.link(`no#${ $.page.name }`) }" onclick="window.cookie('lang', 'no')">NO</a>
          <span class="split">/</span>
          <a href="${ $.link(`en#${ $.page.name }`) }" onclick="window.cookie('lang', 'en')">EN</a>
        </div>
        <script>
          document.querySelectorAll('.lang a').forEach(function(a) {
            if (a.pathname == location.pathname) {
              a.classList.add('active')
            }
          })
        </script>
        <div class="main">${ $.page.content }</div>
        <footer>
          <img src="/img/eldoy-logo-badge.svg" alt="Eldøy footer logo">
          <p>${ $.t('layout.made_by') }</p>
        </footer>
      </body>
    </html>`
}
