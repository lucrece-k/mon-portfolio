import ListeCompetence from "../ListeCompetence/index.";
import CompetancesData from "../../ListeCompetance.json";
import "./style.scss";

function Competances() {
  return (
    <div className="competances">
      <h1>Compétances</h1>
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
export default Competances;
