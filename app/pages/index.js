module.exports = async function($) {
  $.page.title = 'Home'

  return /* html */`
    <style>
      section.logo {
        padding-top: 3rem;
        text-align: center;
      }
      section.logo img {
        height: 140px;
      }
      section.tagline {
        text-align: center;
      }
    </style>
    <section class="logo">
      <img src="/img/full.svg" alt="Eldøy logo full">
    </section>

    <section class="tagline">
      <h1>Eldøy Projects lager nettsider som gir økt omsetning.</h1>
      <h5>"Med min erfaring kan jeg hjelpe deg med å sette opp en plan på hva du virkelig trenger, slik at unødvendige deler kan plukkes bort. Etter lanseringen tilbyr jeg også utvikling, drift og støtte, slik at du kan gjøre det du er best på."</h5>
    </div>
  `
}

