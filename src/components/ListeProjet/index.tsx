import "./style.scss";
interface ListeProjetProps {
  image: string;
  title: string;
  description: string;
}
export default function ListeProjet({
  image,
  title,
  description,
}: ListeProjetProps) {
  return (
    <li className="ListeProjet">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
