import ListeCompetence from "../ListeCompetence/index.";
import CompetancesData from "../../ListeCompetance.json";
import "./style.scss";

function Competences() {
  return (
    <div className="competences" id="competences">
      <h1>Compétences</h1>
      <h2>frontend</h2>
      <ul>
        {CompetancesData.frontent.map((competance) => (
          <ListeCompetence
            key={competance.id}
            image={competance.image}
            title={competance.title}
          />
        ))}
      </ul>
      <h2>Autre</h2>
      <ul>
        {CompetancesData.autre.map((competance) => (
          <ListeCompetence
            key={competance.id}
            image={competance.image}
            title={competance.title}
          />
        ))}
      </ul>
    </div>
  );
}
export default Competences;
