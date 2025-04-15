import "./style.scss";
interface ListeProjetProps {
  image: string;
  title: string;
  description: string;
  technologie: string;
  lien: string;
}
export default function ListeProjet({
  image,
  title,
  description,
  technologie,
  lien,
}: ListeProjetProps) {
  return (
    <li className="ListeProjet">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <br />
      <strong> {technologie} </strong>
      <a href={lien}>Lien vers le projet</a>
    </li>
  );
}
