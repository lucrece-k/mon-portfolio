import Accueil from "../../components/Accueil";
import Competences from "../../components/Competences";
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
      <Competences />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
}
