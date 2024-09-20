import Header from "./Header";
import AboutPage from "./about/page";
import IlluminatedText from "./components/IlluminatedText";

export default function Home() {
  return (
    <div>
      <section id="hero">
        <Header/>
      </section>
      <section>
     <IlluminatedText/>
      </section>
      <section id="about">
       <AboutPage/>
      </section>
      {/* Más secciones según sea necesario */}
    </div>
  )
}
