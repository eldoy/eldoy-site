module.exports = async function($) {
  return /* html */`
    <!doctype html>
    <html lang="no">
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Eldøy - Vi er spesialister på moderne dataløsninger, arkitektur og design. Kontakt oss i dag for å komme i gang.">
        <title>${ $.page.title || '♥' } - Eldøy Projects</title>
        <link rel="stylesheet" href="/css/app.css" type="text/css">
        <link rel="icon" type="image/png" href="/img/favicon.png">
      </head>
      <body>
        <div class="main">${ $.page.content }</div>
        <footer>
          <img src="/img/eldoy-logo-badge.svg" alt="Eldøy footer logo">
          <p>Laget av Eldøy Projects, Oslo, Norge</p>
        </footer>
      </body>
    </html>`
}
