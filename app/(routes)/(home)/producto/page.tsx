import Navbar from "@/components/clientes/navbar";
import ImgProducto from "./components/imgProducto";
import InfoProducto from "./components/infoProducto";
import Redes from "@/components/clientes/redes";
import Footer from "@/components/clientes/footer";

const PageInfoProductos = () => {
    return (
        <div>
            <Navbar />
            <Redes />
            <div className="w-full max-w-7xl mx-auto my-20 p-4">
                <div className="grid sm:grid-cols-2 rounded-lg p-10 gap-10 sm:gap-12">
                    <div className="">
                        <ImgProducto />
                    </div>
                    <div className="">
                        <InfoProducto />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PageInfoProductos;