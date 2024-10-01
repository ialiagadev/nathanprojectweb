import Header from "./Header";
import AboutPage from "./about/page";
import IlluminatedText from "./components/IlluminatedText";
import Partnerscroll from "./components/partnerscroll";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <Header/>
      </section>
      <section>
     <IlluminatedText/>
      </section>
      
      {/* Más secciones según sea necesario */}
    </div>
  )
}
