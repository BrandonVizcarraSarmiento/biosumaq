import Image from "next/image";

const MisionVision = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {/* Columna 1 */}
            <div className="flex flex-col items-center text-center space-y-2">
                <Image src="/img/mision.svg" alt="imagen de misión" width={300} height={300} className="w-full max-w-xs" />
                <div className="p-4 max-w-sm">
                    <p className="text-sm">
                        En Fishfood, nuestra misión es ofrecer productos alimenticios de pescado de la más alta calidad, que sean saludables, deliciosos y accesibles para todos. Nos comprometemos a innovar en el desarrollo de opciones prácticas y nutritivas, respetando siempre los recursos marinos y promoviendo una alimentación equilibrada.
                    </p>
                </div>
            </div>

            {/* Columna 2 */}
            <div className="flex flex-col items-center text-center space-y-2">
                <Image src="/img/vision.svg" alt="imagen de visión" width={300} height={300} className="w-full max-w-xs" />
                <div className="p-4 max-w-sm">
                    <p className="text-sm">
                        Ser la empresa líder en el mercado de productos preformados a base de pescado, reconocida por nuestra excelencia en calidad, sostenibilidad y por contribuir a una alimentación más sana en todo el mundo.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MisionVision;