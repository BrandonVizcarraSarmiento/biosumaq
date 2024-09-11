import Banner from "@/components/clientes/banner";
import Beneficios from "@/components/clientes/beneficios";
import Footer from "@/components/clientes/footer";
import MisionVision from "@/components/clientes/misionVision";
import Navbar from "@/components/clientes/navbar";
import Redes from "@/components/clientes/redes";
import Testimonios from "@/components/clientes/testimonios";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Redes/>
      <Banner/>
      <MisionVision/>
      <Beneficios/>
      <Testimonios/>
      <Footer/>
    </div>
  );
}

