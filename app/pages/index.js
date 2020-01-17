module.exports = async function($) {
  $.page.title = 'Home'

  return /* html */`
    <style>
      div.home {
        text-align: center;
      }
      div.logo {
        padding-top: 3rem;
      }
      div.logo img {
        height: 140px;
      }
      div.tagline {
        text-shadow: 1px 1px #555;
      }
      div.info {
        text-align: left;
      }
      div.contact {
        width: 100%;
      }

    </style>
    <div class="home">
      <div class="logo">
        <img src="/img/full-white.svg" alt="Eldøy logo full">
      </div>
      <div class="tagline">
        <h1>Vi bygger moderne dataløsninger</h1>
      </div>
      <div class="info">
        <div class="products">
          <h2>Produkter</h2>
          <p>
            Vi lager og bruker <a href="https://waveorb.com">webutviklings-rammeverket Waveorb.</a>
          </p>
          <p>
            <a href="https://github.com/eldoy">Sjekk våre Open Source prosjekter på Github.</a>
          </p>
        </div>
        <div class="services">
          <h2>Tjenester</h2>
        </div>
        <div class="tools">
          <h2>Verktøy</h2>
          <p>Dette er noen av de verktøyene vi bruker til daglig:</p>
          <p>
            <a href="https://waveorb.com">Waveorb, </a>
            <a href="https://nodejs.org">NodeJS, </a>
            <a href="https://mongodb.com">MongoDB, </a>
            <a href="https://github.com/google/leveldb">LevelDB, </a>
            <a href="https://reactjs.org">React, </a>
            <a href="https://preactjs.com">Preact, </a>
            <a href="https://vuejs.org">Vue, </a>
            <a href="https://svelte.dev">Svelte, </a>
            <a href="https://www.ruby-lang.org">Ruby</a>
          </p>
          <p>
            Andre stikkord: SEO, digital markedsføring, analyse, salgsstrategi, data mining, HTML, CSS,
            Jamstack, serverless, SSR, Linux, MacOS, iOS, Android, JSON API, RPC, Web Sockets, git, docker,
            VPS, DNS, scripting, sysadmin, nettverk, DevOps, Javascript, Typescript, Java, Python, Bash, C,
            Go, databaser, NoSQL, SQL, testing, performance, skalering, tekstskriving.
          </p>
          <p>
            Alle programmeringsspråk og verktøy kan tilegnes på kort tid.
          </p>
        </div>
        <div class="about">
          <h2>Om oss</h2>
          <p>
            Eldøy Projects drives av Vidar Eldøy. Han har mastergrad i informatikk
            fra universitetet i Oslo, og har drevet med design, utvikling og drift av
            dataløsninger i over 15 år.
          </p>
        </div>
      </p>
      <div class="contact">
        Send en epost til
        <a class="email" href="mailto:vidar@eldoy.com">vidar@eldoy.com</a>
        for å ta kontakt.
      </div>
    </div>
  `
}

