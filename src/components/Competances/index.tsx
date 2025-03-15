import ListeCompetence from "../ListeCompetence/index.";
import CompetancesData from "../../ListeCompetance.json";
import "./style.scss";

function Competances() {
  return (
    <div className="competances">
      <h1>Compétances</h1>
      <ul>
        {CompetancesData.map((competance) => (
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
