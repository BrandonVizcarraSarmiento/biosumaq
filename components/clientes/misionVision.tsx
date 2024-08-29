import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";

const MisionVision = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 justify-items-center my-20">
                <Card className="flex flex-col items-center text-center space-y-2 hover:border-primary transition-colors duration-300">
                    <CardContent>
                        <Image src="/img/mision.svg" width={300} height={300} alt="imagen de misión" className="h-64 w-64 mx-auto" />
                    </CardContent>
                    <CardFooter className="max-w-sm mx-auto">
                        <p className="text-sm text-justify">
                            Nuestra misión en FishFood es ofrecer productos de pescado saludables, deliciosos y accesibles para todos, innovando en opciones nutritivas para una alimentación equilibrada.
                        </p>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col items-center text-center space-y-2 hover:border-primary transition-colors duration-300">
                    <CardContent>
                        <Image src="/img/vision.svg" width={300} height={300} alt="imagen de visión" className="h-64 w-64 mx-auto" />
                    </CardContent>
                    <CardFooter className="max-w-sm mx-auto">
                        <p className="text-sm my-4 text-justify">
                            Ser líderes del mercado en Perú en productos preformados de pescado, reconocidos por calidad, sostenibilidad y promover una alimentación saludable.
                        </p>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col items-center text-center space-y-2 hover:border-primary transition-colors duration-300">
                    <CardContent>
                        <Image src="/img/vision.svg" width={300} height={300} alt="imagen de visión" className="h-64 w-64 mx-auto" />
                    </CardContent>
                    <CardFooter className="max-w-sm mx-auto">
                        <p className="text-sm my-4 text-justify">
                            Valores: mercado en Perú en productos preformados de pescado, reconocidos por calidad, sostenibilidad y promover una alimentación saludable.
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default MisionVision;