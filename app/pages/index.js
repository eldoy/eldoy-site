const tags = [
  "SEO", "digital markedsføring", "analyse", "salgsstrategi", "data mining", "HTML", "CSS",
  "Jamstack", "serverless", "SSR", "Linux", "MacOS", "iOS", "Android", "JSON API", "RPC", "Web Sockets", "git", "docker",
  "VPS", "DNS", "scripting", "sysadmin", "nettverk", "DevOps", "Javascript", "Typescript", "Java", "Python", "Bash", "C",
  "Go", "databaser", "NoSQL", "SQL", "testing", "performance", "skalering", "tekstskriving"
]

module.exports = async function($) {
  $.page.title = 'Home'

  return /* html */`
    <style>
      h2 {
        text-transform: uppercase;
        padding-top: 1.618rem;
      }
      div.home {
        text-align: center;
      }
      div.logo {
        padding-top: 3rem;
      }
      div.logo img {
        height: 140px;
      }
      div.tagline h1 {
        text-shadow: 1px 1px #555;
        font-weight: 400;
        font-size: 36px;
        font-style: italic;
        padding: 1.618rem 0;
      }
      div.info {
        text-align: left;
      }
      div.buzzwords {
      }
      span.tag {
        background: black;
        color: white;
        border: 1px solid white;
        padding: 6px;
        border-radius: 6px;
        margin: 5px;
        font-size: 80%;
        line-height: 2.5;
        white-space: nowrap;
      }
      div.contact {
      }
    </style>
    <div class="home">
      <div class="logo">
        <img src="/img/full-white.svg" alt="Eldøy logo full">
      </div>
      <div class="tagline">
        <h1>&ldquo;Vi er spesialister på moderne dataløsninger, arkitektur og design&rdquo;</h1>
      </div>
      <div class="info">
        <div class="products">
          <h2>Produkter</h2>
          <p>
            Vi lager og bruker <a href="https://waveorb.com">webutviklings-rammeverket Waveorb.</a>
          </p>
          <p>
            Sjekk våre <a href="https://github.com/eldoy">open source prosjekter på Github.</a>
          </p>
        </div>
        <div class="services">
          <h2>Tjenester</h2>
          <p>
            Vi kan gå inn som en del av ditt team, eller jobbe på egen hånd, over nettet eller på lokasjon.
            Det vi utfører er hovedsakelig:
          </p>
          <ul>
            <li>Rask utvikling av eksisterende design</li>
            <li>Avanserte APIer, nettsider og applikasjoner</li>
            <li>Design og oppsett av profesjonelle dataprosjekter</li>
            <li>Konsulenttjenester for markedsføring og strategi</li>
            <li>Mikrotjenester integrert i eksisterende nettsider</li>
          </ul>
          <p>
            Hvis prosjektet er i oppstartsfasen eller begynner å bli vanskelig kan vi komme inn og få det på
            rett kjøl, enten som rådgivere eller utviklere. Vi jobber raskt og leverer høy kvalitet.
          </p>
          <p>
            Vi tar vanligvis betalt per time, men vi kan også diskutere fastpris.
          </p>
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
          <div class="buzzwords">
            <h4>Andre ting</h4>
            ${
              tags.map(function(tag) {
                return `<span class="tag">${tag}</span> `
              }).join('')
            }
          </div>
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
      </div>
      <div class="contact">
        Send en epost til
        <a class="email" href="mailto:vidar@eldoy.com">vidar@eldoy.com</a>
        for å ta kontakt.
      </div>
    </div>
  `
}

