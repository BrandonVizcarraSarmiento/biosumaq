import Image from "next/image";
import Link from "next/link";
import ProductoNombrePrecio from "./productoNombrePrecio";

const Productos = () => {
    return (
        <div className="relative rounded-md border-2 border-transparent hover:border-cyan-400 transition-colors duration-300">
            <Link href="/" className="block">
                <Image src="/img/mision.svg" layout="responsive" width={300} height={300} alt="Imagen de producto" className="p-20 transition-transform duration-400 transform hover:scale-110" />
                <div className="absolute bottom-2 left-2">
                    <ProductoNombrePrecio />
                </div>
            </Link>
        </div>
    );
}

export default Productos;