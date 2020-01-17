module.exports = async function($) {
  $.page.title = 'Contact'

  function handleSubmit() {}

  return /* html */`
    <style>
      .contact{
        margin: 3rem 2rem;
        border-top: 1px solid #aaa;
      }
      .container-wrapper {
        max-width: 100%;
        margin: 0 auto;
        background-color: #fff;
        margin-bottom: 1rem;
      }

      input.send{
        background: #0d0e0f;
        color: #fff;
        font-size: 18px;
        border: 1px solid #0d0e0f;
        padding: 8px;
        border-radius: 10px;
        width: 100px;
        margin-top: .8rem;
        cursor: pointer;
      }

      .contact-text {
        margin-top: 0;
      }

      .contact-form {
        padding-top: 2.5rem;
      }

      .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      }

      .column {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
      }

    </style>
    <h1>Kontakt oss</h1>
    <div class="wrapper-fullwidth">
      <div class="contact row">
        <div class="column">
          <div class='contact-text'>
            <h3>Kontakt oss</h3>
            <p>Lurer du på noe?</p>
            <p>Fyll ut kontaktskjemaet, så svarer vi så fort vi kan. </p>
            <br>
            <p>&#9742; Telefon: 40404040</p>
            <p><a class="email" href="mailto:vidar@eldoy.com">&#9993; E-post: vidar@eldoy.com</a></p>
          </div>
        </div>
        <div class='column'>
          <div class="contact-form>
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
              <input class="send" type="submit" value="Send" onclick="handleSubmit()"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  `
}
