import "./style.scss";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contactez-moi</h1>
      <div className="contact_contente">
        Vous avez une opportunité à me proposer ou simplement une question ?
        N’hésitez pas à me contacter ! Je serais ravie d’échanger avec vous.
        Cliquez sur le bouton ci-dessous pour m’envoyer un email, et je vous
        répondrai dans les plus brefs délais.
        <a href="mailto:kouamelucrece@gmail.com">Email!</a>
      </div>
    </div>
  );
}
