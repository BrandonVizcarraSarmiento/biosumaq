import Image from "next/image";

const MisionVision = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 justify-items-center">
            <div className="flex flex-col items-center text-center space-y-2">
                <Image src="/img/mision.svg" width={300} height={300} alt="imagen de misión" className="h-64 w-64 mx-auto" />
                <div className="max-w-sm mx-auto">
                    <p className="text-sm text-justify">
                        En Fishfood, nuestra misión es ofrecer productos alimenticios de pescado de la más alta calidad, que sean saludables, deliciosos y accesibles para todos. Nos comprometemos a innovar en el desarrollo de opciones prácticas y nutritivas, respetando siempre los recursos marinos y promoviendo una alimentación equilibrada.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center space-y-2">
                <Image src="/img/vision.svg" width={300} height={300} alt="imagen de visión" className="h-64 w-64 mx-auto" />
                <div className="max-w-sm mx-auto">
                    <p className="text-sm my-4 text-justify">
                        Ser la empresa líder en el mercado de productos preformados a base de pescado, reconocida por nuestra excelencia en calidad, sostenibilidad y por contribuir a una alimentación más sana en todo el mundo.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MisionVision;