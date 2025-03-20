import "./style.scss";
interface ListeCompetenceProps {
  image: string;
  title: string;
}
function ListeCompetence({ image, title }: ListeCompetenceProps) {
  return (
    <li className="listeCompetence">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </li>
  );
}
export default ListeCompetence;
