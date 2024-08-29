import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const OtrosEventos = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 justify-items-center my-20">
                <Card className="flex flex-col items-center text-center space-y-2 hover:border-primary transition-colors duration-300 overflow-hidden">
                    <Image src="/img/feritac.avif" width={300} height={300} alt="imagen de misión" className="h-64 w-64 object-cover" />
                    <CardContent className="max-w-sm mx-auto">
                        <div className="text-sm text-justify">
                            <CardTitle className="mb-2">
                                Titulo del evento
                            </CardTitle>
                            <CardDescription className="mb-2">
                                fecha
                            </CardDescription>
                            <CardDescription>
                                aqui descripcion
                            </CardDescription>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex flex-col items-center text-center space-y-2 hover:border-primary transition-colors duration-300 overflow-hidden">
                    <Image src="/img/feritac.avif" width={300} height={300} alt="imagen de misión" className="h-64 w-64 object-cover" />
                    <CardContent className="max-w-sm mx-auto">
                        <div className="text-sm text-justify">
                            <CardTitle className="mb-2">
                                Titulo del evento
                            </CardTitle>
                            <CardDescription className="mb-2">
                                fecha
                            </CardDescription>
                            <CardDescription>
                                aqui descripcion
                            </CardDescription>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex flex-col items-center text-center space-y-2 hover:border-primary transition-colors duration-300 overflow-hidden">
                    <Image src="/img/feritac.avif" width={300} height={300} alt="imagen de misión" className="h-64 w-64 object-cover" />
                    <CardContent className="max-w-sm mx-auto">
                        <div className="text-sm text-justify">
                            <CardTitle className="mb-2">
                                Titulo del evento
                            </CardTitle>
                            <CardDescription className="mb-2">
                                fecha
                            </CardDescription>
                            <CardDescription>
                                aqui descripcion
                            </CardDescription>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default OtrosEventos;