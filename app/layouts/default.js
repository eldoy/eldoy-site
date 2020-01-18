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
        <meta name="description" content="Eldøy - Vi lager moderne dataløsninger">
        <title>${ $.page.title || '♥' } - Eldøy</title>
        <link rel="stylesheet" href="/css/app.css" type="text/css">
        <link rel="stylesheet" href="/css/variables.css" type="text/css">
        <link rel="icon" type="image/png" href="/img/favicon.png">
      </head>
      <body>
        <header>
          <nav>
            <div>
              <a class="navbar-homelink" href="/">
                <img class="navbar-logo-badge" src="/img/badge-white.svg" alt="Eldøy logo badge">
                <img class="navbar-logo-text" src="/img/textonly.svg" alt="Eldøy logo text">
              </a>
            </div>
          </nav>
        </header>
        <div class="main">${ $.page.content }</div>
        <footer>
          <img class="footer-logo-badge" src="/img/badge-gray.svg" alt="Eldøy logo badge">
          <p>Laget av Eldøy Projects, Oslo, Norge</p>
        </footer>
        <script>${ init };init()</script>
      </body>
    </html>`
}
