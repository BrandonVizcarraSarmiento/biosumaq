import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";

const MenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/" className="block">Inicio</Link>
                <Link href="/about" className="block">Sobre nosotros</Link>
                <Link href="/productos" className="block">Productos</Link>
                <Link href="/" className="block">Contactanos</Link>
            </PopoverContent>
        </Popover>
    );
}

export default MenuMobile;