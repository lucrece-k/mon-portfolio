import "./style.scss";
import ProjetsData from "../../ListeProjets.json";
import ListeProjet from "../ListeProjet";
export default function Projets() {
  return (
    <div className="projets" id="projets">
      <h1>projets</h1>
      <ul>
        {ProjetsData.map((projet) => (
          <ListeProjet
            key={projet.id}
            image={projet.image}
            title={projet.title}
            description={projet.description}
            lien={projet.lien}
          />
        ))}
      </ul>
    </div>
  );
}
