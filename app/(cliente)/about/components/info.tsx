import Image from "next/image";

const Info = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 justify-items-center my-20 mx-20">
            <div className="flex flex-col items-center text-center space-y-4 rounded-lg p-4 border-2 bg-violet-500 hover:border-cyan-400 transition-colors duration-300">
                <Image src="/img/mision.svg" width={300} height={300} alt="imagen de misión" className="h-64 w-64 mx-auto" />
                <p className="text-base px-4 md:px-8 text-justify">
                    En Fishfood, la calidad es nuestra máxima prioridad. Desde la selección del mejor pescado fresco hasta el cuidado en cada etapa de producción, nos aseguramos de que nuestros productos no solo cumplan, sino que superen los estándares más exigentes. Cada pieza que llega a tu mesa ha pasado por rigurosas pruebas de calidad, garantizando un sabor excepcional y la frescura que nos caracteriza. Nos enorgullece ofrecerte productos libres de conservantes artificiales, elaborados con ingredientes 100% naturales, porque tu bienestar es tan importante para nosotros como el sabor.
                </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 rounded-lg p-4 border-2 bg-violet-500 hover:border-cyan-400 transition-colors duration-300">
                <Image src="/img/vision.svg" width={300} height={300} alt="imagen de visión" className="h-64 w-64 mx-auto" />
                <p className="text-base px-4 md:px-8 text-justify">
                    En Fishfood, creemos en la importancia de cuidar nuestro planeta mientras disfrutamos de sus frutos. Por eso, nos comprometemos a prácticas sostenibles que protegen los recursos marinos y reducen nuestro impacto ambiental. Trabajamos con proveedores que comparten nuestros valores, asegurando que cada pescado provenga de fuentes responsables. Además, utilizamos empaques reciclables y minimizamos el desperdicio en todas nuestras operaciones. Nuestra misión es ofrecerte productos que no solo sean deliciosos, sino también respetuosos con el medio ambiente, para que puedas disfrutar de cada bocado con la tranquilidad de estar cuidando el planeta.
                </p>
            </div>
        </div>
    );
}

export default Info;