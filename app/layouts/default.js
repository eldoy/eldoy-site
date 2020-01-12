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
        <div class="content">
          <nav>
            <a href="/">Hjem</a>
            <a href="/about.html">Om meg</a>
            <a href="/services.html">Tjenester</a>
            <!--<a href="/projects.html">Prosjekter</a>-->
            <a href="/contact.html">Kontakt</a>
          </nav>
          <div class="main">${ $.page.content }</div>
          <footer>
            <p>Made by Speria Creative 2020</p>
          </footer>
        </div>
        <script>${ current }; current()</script>
      </body>
    </html>`
}
