"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import MenuMobile from "./menuMobile";


const Navbar = () => {
    const router = useRouter()

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:mx-w-6xl">
            <h1 className="text-3xl" onClick={() => router.push("/")}>Bio
                <span className="font-bold">Sumaq</span>
            </h1>
            <div className="items-center justify-between hidden sm:flex space-x-4">
                <Link href="/">Inicio</Link>
                <Link href="/about">Sobre nosotros</Link>
                <Link href="/productos">Productos</Link>
                <Link href="/">Contactanos</Link>
            </div>
            <div className="flex sm:hidden">
                <MenuMobile />
            </div>
        </div>
    );
}

export default Navbar;