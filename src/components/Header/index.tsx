import logo from "../../../public/images/logo.webp";
import "../Header/style.scss";
function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <nav>
        <li>
          <a href="#acceuil">Acceuil</a>
        </li>
        <li>
          <a href="#profil">Profil</a>
        </li>
        <li>
          <a href="#competences">Compétences</a>
        </li>
        <li>
          <a href="#projets">Projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </nav>
    </header>
  );
}
export default Header;
