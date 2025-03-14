import "./style.scss";
function Profil() {
  return (
    <div className="profil">
      <h1>a propos de moi</h1>
      <div className="profil-contenu">
        <img src="./public/images/photo-profil.jpg" alt="photo" />
        <p>
          "Salut ! Je m'appelle KOUAME Lucrèce, intégratrice web junior. Pendant
          plusieurs années, j’ai exercé en tant que technicienne de laboratoire
          dans le secteur de la chimie, ce qui m’a permis d’acquérir des
          compétences essentielles comme la rigueur, l’organisation et le
          travail en équipe. Passionnée par le développement web depuis
          longtemps, j’ai décidé d’opérer une reconversion professionnelle pour
          en faire mon métier. J’ai ainsi suivi une formation d’intégrateur web
          (niveau Bac+2) chez OpenClassrooms, où j’ai développé des compétences
          solides en HTML, CSS, JavaScript et React. Aujourd’hui, je suis à la
          recherche d’un premier poste dans lequel je pourrai mettre mes
          compétences à profit et continuer à progresser au sein d’une équipe
          dynamique !"
        </p>
      </div>
    </div>
  );
}
export default Profil;
