import Competances from "./components/Competances";
import Header from "./components/Header";
import Profil from "./components/Profil";
function App() {
  return (
    <div>
      <Header />
      <div className="accuil">
        <p>KOUAME Lucrèce</p>
        <h1>Développeur web - intégrateur</h1>
      </div>
      <Profil />
      <Competances />
    </div>
  );
}

export default App;
