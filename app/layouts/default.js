module.exports = async function($) {
  return /* html */`
    <!doctype html>
    <html lang="${$.lang}">
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="${$.page.description}">
        <title>${$.page.title || '♥'} - Eldøy Projects</title>
        <link rel="icon" type="image/png" href="/img/favicon.png">
        ${$.style('/bundle.css')}
        <script async defer data-domain="eldoy.com" src="https://plausible.io/js/plausible.js"></script>
      </head>
      <body>
        <script>document.cookie='lang=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'</script>
        <div class="lang">
          <a href="${$.link(`en@${$.page.name}`)}">EN</a>
          <span class="split">/</span>
          <a href="${$.link(`no@${$.page.name}`)}">NO</a>
        </div>
        <script>
          document.querySelectorAll('.lang a').forEach(function(a) {
            if (a.pathname == location.pathname) a.classList.add('active')
          })
        </script>
        <div class="main">${$.page.content}</div>
        <footer>
          <img src="/img/eldoy-logo-badge.svg" alt="Eldøy footer logo">
          <p>${$.t('layout.made_by')}</p>
        </footer>
      </body>
    </html>`
}
