module.exports = async function($) {
  function init() {
    document.querySelectorAll('nav a').forEach(function(a) {
      if (a.pathname == location.pathname) {
        a.classList.add('active-link')
      }
    })
  }
  return /* html */`
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Eldøy - Vi er spesialister på moderne dataløsninger, arkitektur og design. Kontakt oss i dag for å komme i gang.">
        <title>${ $.page.title || '♥' } - Eldøy</title>
        <link rel="stylesheet" href="/css/app.css" type="text/css">
        <link rel="icon" type="image/png" href="/img/favicon.png">
      </head>
      <body>
        <div class="main">${ $.page.content }</div>
        <footer>
          <img class="footer-logo-badge" src="/img/eldoy-logo-badge.svg" alt="Eldøy logo badge">
          <p>Laget av Eldøy Projects, Oslo, Norge</p>
        </footer>
        <script>${ init };init()</script>
      </body>
    </html>`
}
