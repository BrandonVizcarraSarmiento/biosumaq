import Image from "next/image";
import Link from "next/link";
import ProductoNombrePrecio from "../../productos/components/productoNombrePrecio";

const EventoPrincipal = () => {
    return (
        <div className="relative w-full max-w-md mx-auto">
        <img src="/img/feritac.avif" alt="Feritac" className="w-full h-auto" />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-4xl font-bold drop-shadow-md">
          Evento Feritac
        </h2>
        <span className="absolute bottom-2 left-2 text-white text-sm md:text-base drop-shadow-md">
          29/08/2024
        </span>
      </div>
      
    );
}

export default EventoPrincipal;