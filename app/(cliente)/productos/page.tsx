import Productos from "./components/productos";
import Slider from "./components/slider";

const SeccionProductos = () => {
    return (
        <div>
            <section className="flex flex-col items-center p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl w-full">
                    {/* Columna izquierda: imagen grande */}
                    <div className="col-span-1 md:col-span-2 flex justify-center items-center">
                        <Productos />
                    </div>

                    {/* Columna derecha: imágenes pequeñas */}
                    <div className="col-span-1 flex flex-col justify-between space-y-4">
                        <div className="flex-1 flex justify-center items-start">
                            <Productos />
                        </div>
                        <div className="flex-1 flex justify-center items-end">
                            <Productos />
                        </div>
                    </div>
                </div>
                <Slider />
            </section>
            <section>

            </section>
        </div>
    );
}

export default SeccionProductos;