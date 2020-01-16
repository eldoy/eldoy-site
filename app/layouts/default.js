module.exports = async function($) {
  function current () {
    var a = q(`nav a[href="${ location.pathname }"]`) || q('nav a')
    a.classList.add('active-link')
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
        <script src="/js/haka-min.js"></script>
      </head>
      <body>
        <header>
          <nav>
            <a class="navbar-homelink" href="/">
              <img class="navbar-logo-badge" src="/img/eldoy-draft4-white-optimized.svg" alt="Eldøy logo">
            </a>
            <a class="navlink" href="/about.html">Om meg</a>
            <a class="navlink" href="/services.html">Tjenester</a>
          </nav>
        </header>
        <div class="main">${ $.page.content }</div>
          <footer>
            <p>Made by Eldøy Projects</p>
          </footer>
        </div>
        <script>${ current }; current()</script>
      </body>
    </html>`
}
