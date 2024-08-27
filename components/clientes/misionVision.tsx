import Image from "next/image";

const MisionVision = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 justify-items-center my-20">
            <div className="flex flex-col items-center text-center space-y-2 rounded-lg p-4 border-2 bg-violet-500 hover:border-cyan-400 transition-colors duration-300">
                <Image src="/img/mision.svg" width={300} height={300} alt="imagen de misión" className="h-64 w-64 mx-auto" />
                <div className="max-w-sm mx-auto">
                    <p className="text-sm text-justify">
                        Nuestra misión en FishFood es ofrecer productos de pescado saludables, deliciosos y accesibles para todos, innovando en opciones nutritivas para una alimentación equilibrada.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center space-y-2 rounded-lg p-4 border-2 bg-violet-500 hover:border-cyan-400 transition-colors duration-300">
                <Image src="/img/vision.svg" width={300} height={300} alt="imagen de visión" className="h-64 w-64 mx-auto" />
                <div className="max-w-sm mx-auto">
                    <p className="text-sm my-4 text-justify">
                        Ser líderes del mercado en Perú en productos preformados de pescado, reconocidos por calidad, sostenibilidad y promover una alimentación saludable.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MisionVision;