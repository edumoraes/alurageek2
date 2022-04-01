export default function Formulario() {

  return (

    <div className="formulario">
      <form action="">
          <div className="input-box">
            <input className="input-user" type="text" name="name" id="name" required /><br />
            <label className="label-input" for="name">Nome</label><br />
          </div>
          <div className="input-box">
            <input className="input-user" type="email" name="email" id="email" required /><br />
            <label className="label-input" for="email">E-mail</label><br />
          </div>
          <div className="input-box">
            <input className="input-user" type="text" name="subject" id="subject" required /><br />
            <label className="label-input" for="subject">Assunto</label><br />
          </div>
          <div className="input-box">
            <textarea className="input-user" name="mesage" id="message" cols="30" rows="10" required></textarea>
            <label className="label-input" for="message">Mensagem</label><br />
          </div>
        <button className="button-primary" type="submit">Enviar mensagem</button>
      </form>
    </div>
  )
}