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
      div.contact {
        width: 100%;
      }
    </style>
    <div class="home">
      <div class="logo">
        <img src="/img/full-white.svg" alt="Eldøy logo full">
      </div>
      <div class="tagline">
        <h1>Vi lager moderne dataløsninger</h1>
      </div>
      <div class="contact">
        Send en epost til
        <a class="email" href="mailto:vidar@eldoy.com">vidar@eldoy.com</a>
        hvis det er noe du lurer på.
      </div>
    </div>
  `
}

