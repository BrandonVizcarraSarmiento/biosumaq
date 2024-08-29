import Image from "next/image";
import Link from "next/link";
import FechaEvento from "./fecha";

const EventoPrincipal = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="relative rounded-md border-2 border-transparent hover:border-cyan-400 transition-colors duration-300">
        <Link href="/" className="block">
          <Image src="/img/feritac.avif" layout="responsive" width={300} height={300} alt="Imagen de producto" className="transition-transform duration-400 transform hover:scale-110" />
          <div className="absolute bottom-2 left-2">
            <FechaEvento />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EventoPrincipal;