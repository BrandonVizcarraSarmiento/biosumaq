import Image from "next/image";
import { Button } from "../ui/button";

const Footer = () => {
    return (
        <div>
        <section className="grid grid-cols-3 gap-4 p-6 bg-gray-100">
          <div className="flex justify-center items-center">
            <Image
              src="/img/logo.jpg"
              alt="Success"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
      
          <div className="flex justify-center items-center">
            <ul className="space-y-2 text-lg font-semibold text-center">
              <li className="hover:text-blue-500 cursor-pointer">Inicio</li>
              <li className="hover:text-blue-500 cursor-pointer">Sobre Nosotros</li>
              <li className="hover:text-blue-500 cursor-pointer">Productos</li>
              <li className="hover:text-blue-500 cursor-pointer">Contáctanos</li>
            </ul>
          </div>
      
          <div className="flex flex-col justify-center items-center text-center">
            <span className="mb-2">Déjanos tu email para estar atento a nuestras novedades</span>
            <input
              type="text"
              className="border border-gray-300 p-2 rounded-lg mb-2"
              placeholder="Tu email"
            />
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Enviar
            </Button>
          </div>
        </section>
      
        <section className="text-center py-4 bg-gray-200">
          <h3>©2024 FishFood. Todos los derechos reservados.</h3>
        </section>
      </div>
      
    );
}

export default Footer;