import Image from "next/image";
import Link from "next/link";
import FechaEvento from "./fecha";

const EventoPrincipal = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-10">
    <div className="relative rounded-md border-2 border-gray-50 hover:border-black transition-colors duration-300 dark:border-black dark:hover:border-white">
      <Link href="/" className="block">
        <div className="relative">
          <Image
            src="/img/feritac.avif"
            layout="responsive"
            width={300}
            height={300}
            alt="Imagen de producto"
            className="transition-transform duration-400 transform hover:scale-110 rounded-md brightness-50"
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