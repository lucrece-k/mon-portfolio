import Accueil from "../../components/Accueil";
import Competances from "../../components/Competances";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Profil from "../../components/Profil";
import Projets from "../../components/Projets";

export default function Home() {
  return (
    <div>
      <Header />
      <Accueil />
      <Profil />
      <Competances />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
}
