const tools = [
  ['https://waveorb.com', 'Waveorb'],
  ['https://nodejs.org', 'NodeJS'],
  ['https://mongodb.com', 'MongoDB'],
  ['https://reactjs.org', 'React'],
  ['https://vuejs.org', 'Vue'],
  ['https://www.ruby-lang.org', 'Ruby']
]

const email = Buffer.from('vidar@eldoy.com').toString('base64')

module.exports = async function($) {
  const tags = Object.keys($.app.locales[$.lang].tags)
  $.page.title = $.t('pages.index.title')
  $.page.description = $.t('pages.index.description')

  return /* html */`
    <div class="logo">
      <a href="${ $.link('index') }"><img src="/img/eldoy-logo-main.svg" alt="Eldøy Projects logo"></a>
    </div>
    <div class="tagline">
      <h1>&ldquo;${ $.t('pages.index.tagline') }&rdquo;</h1>
    </div>
    <div class="info">
      <h2>${ $.t('pages.index.products') }</h2>
      <p>
        <img src="/img/waveorb-badge.svg" alt="Waveorb logo">
        ${ $.t('pages.index.we_make_and_use') }
        <a href="https://waveorb.com">${ $.t('pages.index.web_framework_waveorb') }</a>
      </p>
      <p>
        <img src="/img/github-badge.svg" alt="Github logo">
        ${ $.t('pages.index.check_our') }
        <a href="https://github.com/eldoy">${ $.t('pages.index.open_source_projects') }</a>
      </p>
      <h2>${ $.t('pages.index.services') }</h2>
      <p>
        ${ $.t('pages.index.team_or_location') }
        ${ $.t('pages.index.what_we_do') }
      </p>
      <ul>
        <li>${ $.t('pages.index.quick_development') }</li>
        <li>${ $.t('pages.index.advanced_apis') }</li>
        <li>${ $.t('pages.index.design_and_setup') }</li>
        <li>${ $.t('pages.index.technical_services') }</li>
        <li>${ $.t('pages.index.microservices') }</li>
      </ul>
      <p>${ $.t('pages.index.project_fix') }</p>
      <h2>${ $.t('pages.index.tools') }</h2>
      <p>${ $.t('pages.index.tools_we_use') }</p>
      ${
        tools.map(function(names) {
          return `<a class="tag" href="${names[0]}">${names[1]}</a>`
        }).join(' ')
      }
      <p>${ $.t('pages.index.other_things') }</p>
      ${
        tags.map(function(tag) {
          return `<span class="tag">${ $.t(`tags.${tag}`) }</span>`
        }).join(' ')
      }
      <p>${ $.t('pages.index.programming') }</p>
      <h2>${ $.t('pages.index.about_us') }</h2>
      <p>${ $.t('pages.index.about_eldoy_projects') }</p>
      <p>
        ${ $.t('pages.index.send_email_to') }
        <a id="a" href=""></a>
        ${ $.t('pages.index.get_in_touch') }
      </p>
    </div>
    <p>
      <a id="a" href=""></a>
    </p>
    <script>
      setTimeout(() => {
        var m = atob('${email}')
        var a = document.querySelector('#a')
        a.href = 'mailto:' + m
        a.textContent = m
      }, 5)
    </script>
  `
}
