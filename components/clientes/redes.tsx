
import Image from "next/image";
import Link from "next/link";

const Redes = () => {
    return (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-5 p-2 rounded-lg shadow-lg z-10">
            <Link href="/"><Image src="/img/whatsapp.svg" width={30} height={30} alt={"Imagen de whatsapp"} /></Link>
            <Link href="/"><Image src="/img/instagram.svg" width={30} height={30} alt={"Imagen de instagram"} /></Link>
            <Link href="/"><Image src="/img/facebook.svg" width={30} height={30} alt={"Imagen de facebook"} /></Link>
        </div>
    );
}

export default Redes;