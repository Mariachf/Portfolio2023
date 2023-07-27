import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skill";
import Projetos from "./Components/Projetos/Projetos";
import Footer from "./Components/Footer/Footer";
import Styles from "./Styles/Global.js";

export default function App() {
  return (
    <>
      <Styles />
      <Header />
      <Main />
      <Skills />
      <Projetos />
      <Footer />
    </>
  );
}
