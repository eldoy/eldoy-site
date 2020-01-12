module.exports = async function($) {
  $.page.title = 'Home'

  function handleSubmit() {
  console.log("Clicked")
  }

  return /* html */`
    <div class="wrapper">
      <section class="main">
        <h1>Eldøy project lager nettsider som gir økt omsetning.</h1>
        <h5 style="font-style: italic;">" Med min erfaring kan jeg hjelpe deg med å sette opp en plan på hva du virkelig trenger, slik at unødvendige deler kan plukkes bort. Etter lanseringen tilbyr jeg også utvikling, drift og støtte, slik at du kan gjøre det du er best på."</h5>
      </section>
    </div>
    <div class="wrapper-fullwidth">
      <section class="contact">
        <h3>Kontakt oss</h3>
        <div class="row">
          <div class="col-12">
            <p>Lurer du på noe?</p>
            <p>Fyll ut kontaktskjemaet, så svarer vi så fort vi kan. </p>
            <br>
            <p>&#9742; Telefon: 40404040</p>
            <p><a class="email" href="mailto:vida@eldoy.com">&#9993; E-post: vida@eldoy.com</a></p>
          </div>
          <div class="col-8">
            <form action="" method="post" class="form">
              <label for="name">Navn/ Firma*</label>
              <input type="text" id="name" name="name" placeholder="Kari Olsen">
              <br><br>
              <label for="name">Telefonnummer</label>
              <input type="text" id="phone" name="phone" placeholder="22222222">
              <br><br>
              <label for="name">E-post*</label>
              <input type="text" id="email" name="email" placeholder="example@mail.com">
              <br><br>
              <label for="subject">Beskjed</label>
              <textarea id="subject" name="subject" placeholder="Skrive noe..." style="height:200px"></textarea>
              <br>
              <button class="send" type="submit" value="Submit" onclick="handleSubmit()">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  `
}

