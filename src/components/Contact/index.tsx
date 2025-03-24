import "./style.scss";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>

      <form action="">
        <div className="contact-input">
          <label htmlFor="nom">Nom</label>
          <input type="text" />
          <label htmlFor="prenom">Prenom</label>
          <input type="text" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <button>Envoyer</button>
      </form>
    </div>
  );
}
