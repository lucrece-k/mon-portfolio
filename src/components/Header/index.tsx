import logo from "../../../public/images/logo.png";
import "../Header/style.scss";
function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <li>Acceuil</li>
        <li>Profil</li>
        <li>Compétances</li>
        <li>Projets</li>
        <li>Contact</li>
      </nav>
    </header>
  );
}
export default Header;
