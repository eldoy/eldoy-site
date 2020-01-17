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
        <title>${ $.page.title || 'Untitled' }</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="/css/app.css" type="text/css">
        <link rel="stylesheet" href="/css/variables.css" type="text/css">
        <link rel="icon" type="image/png" href="/img/favicon.png">
        <script src="/js/haka-min.js"></script>
      </head>
      <body>
        <header>
          <nav>
            <a class="navbar-homelink" href="/">
              <img class="navbar-logo-badge" src="/img/badge-white.svg" alt="Eldøy logo badge">
              <img class="navbar-logo-text" src="/img/textonly.svg" alt="Eldøy logo text">
            </a>
            <a class="navlink" href="/about.html">Om oss</a>
            <a class="navlink" href="/services.html">Tjenester</a>
          </nav>
        </header>
        <div class="main">${ $.page.content }</div>
          <footer>
            <p>Made by Eldøy Projects</p>
          </footer>
        </div>
        <script>${ init }; init()</script>
      </body>
    </html>`
}
