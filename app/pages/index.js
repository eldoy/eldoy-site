const tools = [
  ['https://waveorb.com', 'Waveorb'],
  ['https://nodejs.org', 'NodeJS'],
  ['https://mongodb.com', 'MongoDB'],
  ['https://github.com/google/leveldb', 'LevelDB'],
  ['https://reactjs.org', 'React'],
  ['https://svelte.dev', 'Svelte'],
  ['https://vuejs.org', 'Vue'],
  ['https://www.ruby-lang.org', 'Ruby']
]

const tags = [
  'SEO', 'digital markedsføring', 'data mining', 'salgsstrategi', 'tekstskriving', 'analytics', 'HTML', 'CSS',
  'Jamstack', 'serverless', 'SSR', 'Linux', 'NGINX', 'JSON API', 'RPC', 'Web Sockets', 'Git', 'Docker',
  'VPS', 'DNS', 'scripting', 'sysadmin', 'DevOps', 'nettverk', 'Javascript', 'Typescript', 'Python', 'Bash',
  'Go', 'databaser', 'NoSQL', 'SQL', 'testing', 'performance', 'skalering'
]

module.exports = async function($) {
  $.page.title = 'Moderne dataløsninger, arkitektur og design'

  return /* html */`
    <div class="logo">
      <a href="/"><img src="/img/eldoy-logo-main.svg" alt="Eldøy projects home"></a>
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
          <li>Mikrotjenester integrert i eksisterende løsninger</li>
        </ul>
        <p>
          Hvis prosjektet er i oppstartsfasen eller begynner å bli vanskelig kan vi komme inn og få det på
          rett kjøl, enten som rådgivere eller utviklere. Vi jobber effektivt og leverer høyeste kvalitet.
        </p>
        <p>
          Vi tar vanligvis betalt per time, men vi kan også diskutere fastpris.
        </p>
      </div>
      <div class="tools">
        <h2>Verktøy</h2>
        <p>Dette er noen av de verktøyene vi bruker til daglig:</p>
        <div class="tools">
          ${
            tools.map(function(names) {
              return `<a class="tag" href="${names[0]}">${names[1]}</a>`
            }).join(' ')
          }
        </div>
        <div class="buzzwords">
          <p>Andre ting:</p>
          ${
            tags.map(function(tag) {
              return `<span class="tag">${tag}</span>`
            }).join(' ')
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
  `
}

