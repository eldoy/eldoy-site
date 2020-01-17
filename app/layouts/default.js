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
        <title>${ $.page.title || 'Eldøy Projects' }</title>
        <link rel="stylesheet" href="/css/app.css" type="text/css">
        <link rel="stylesheet" href="/css/variables.css" type="text/css">
        <link rel="icon" type="image/png" href="/img/favicon.png">
      </head>
      <body>
        <header>
          <nav>
            <a class="navbar-homelink" href="/">
              <img class="navbar-logo-badge" src="/img/badge-white.svg" alt="Eldøy logo badge">
              <img class="navbar-logo-text" src="/img/textonly.svg" alt="Eldøy logo text">
            </a>
          </nav>
        </header>
        <div class="main">${ $.page.content }</div>
          <footer>
            <p>Laget av Eldøy Projects, Oslo, Norge</p>
          </footer>
        </div>
        <script>${ init };init()</script>
      </body>
    </html>`
}
