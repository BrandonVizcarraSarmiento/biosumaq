import Navbar from "@/components/clientes/navbar";
import EventoPrincipal from "./components/eventoPrincipal";
import OtrosEventos from "./components/otrosEventos";
import Redes from "@/components/clientes/redes";
import Footer from "@/components/clientes/footer";


const Novedades = () => {
    return (
        <div>
            <Navbar />
            <Redes />
            <EventoPrincipal />
            <OtrosEventos />
            <Footer />
        </div>
    );
}

export default Novedades;