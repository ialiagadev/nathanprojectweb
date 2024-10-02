import Header from "./Header";
import AboutPage from "./about/page";
import IlluminatedText from "./components/IlluminatedText";
import FormularioCorreo from "./components/newsletter";
export default function Home() {
  return (
    <div>
      <section id="hero">
        <Header/>
      </section>
      <section>
     <IlluminatedText/>
      </section>
      <section>
     <FormularioCorreo/>
      </section>
      
      {/* Más secciones según sea necesario */}
    </div>
  )
}
