import Link from "next/link";
import FechaEvento from "./fecha";

const EventoPrincipal = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-10">
      <div className="relative rounded-md border-2 border-gray-50 hover:border-black transition-colors duration-300 dark:border-black dark:hover:border-white">
        <Link href="/infonovedades" className="block">
          <div className="relative">
            <img
              src="/img/feritac.avif"
              alt="Imagen de producto"
              className="w-full h-auto rounded-md brightness-50" // Asegúrate de que la imagen ocupe el 100% del contenedor
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl font-bold drop-shadow-md">
              Evento más reciente
            </h2>
          </div>
          <div className="absolute bottom-2 left-2">
            <FechaEvento />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EventoPrincipal;
