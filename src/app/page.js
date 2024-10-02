import Header from "./Header";
import IlluminatedText from "./components/IlluminatedText";
import FormularioCorreo from "./components/newsletter";
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
      <section className=" bg-black">
         <FormularioCorreo />
       </section>
       
       <section className="bg-black">
         <Partnerscroll />
        </section>

      
      {/* Más secciones según sea necesario */}
    </div>
  )
}
