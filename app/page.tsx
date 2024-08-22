import Banner from "@/components/clientes/banner";
import MisionVision from "@/components/clientes/misionVision";
import Beneficios from "@/components/clientes/beneficios";
import Image from "next/image";
import Testimonios from "@/components/clientes/testimonios";

export default function Home() {
  return (
    <div>
      <Banner />
      <MisionVision />
      <Beneficios />
      <Testimonios />
    </div>
  );
}

