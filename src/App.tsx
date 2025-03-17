import Accueil from "./components/Accueil";
import Competances from "./components/Competances";
import Header from "./components/Header";
import Profil from "./components/Profil";
import "./styles.scss";
function App() {
  return (
    <div>
      <Header />
      <Accueil />
      <Profil />
      <Competances />
    </div>
  );
}

export default App;
