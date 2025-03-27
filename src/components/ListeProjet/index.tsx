import "./style.scss";
interface ListeProjetProps {
  image: string;
  title: string;
  description: string;
  lien: string;
}
export default function ListeProjet({
  image,
  title,
  description,
  lien,
}: ListeProjetProps) {
  return (
    <li className="ListeProjet">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>
        <a href={lien}>Lien vers le projet</a>
      </button>
    </li>
  );
}
