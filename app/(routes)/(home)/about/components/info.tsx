import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Info = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center my-20 mx-20">
                <Card className="flex flex-col items-center text-center space-y-2 hover:border-primary transition-colors duration-300 bg-slate-200 dark:bg-slate-950">
                    <CardContent>
                        <Image src="/img/mision.svg" width={300} height={300} alt="imagen de misión" className="h-64 w-64 mx-auto" />
                    </CardContent>
                    <CardFooter>
                        <p className="text-base md:px-8 text-justify">
                            En Fishfood, la calidad es clave. Seleccionamos el mejor pescado y cuidamos cada etapa de producción. Nuestros productos, libres de conservantes artificiales y hechos con ingredientes naturales, pasan por rigurosas pruebas para garantizar sabor y frescura.
                        </p>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col items-center text-center space-y-2 hover:border-primary transition-colors duration-300 bg-slate-200 dark:bg-slate-950">
                    <CardContent>
                        <Image src="/img/vision.svg" width={300} height={300} alt="imagen de visión" className="h-64 w-64 mx-auto" />
                    </CardContent>
                    <CardFooter>
                        <p className="text-base md:px-8 text-justify">
                            En Fishfood, protegemos el planeta mientras disfrutamos de sus frutos. Usamos prácticas sostenibles, trabajamos con proveedores responsables y utilizamos empaques reciclables. Ofrecemos productos deliciosos y respetuosos con el medio ambiente.
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Info;