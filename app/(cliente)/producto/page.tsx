import ImgProducto from "./components/imgProducto";
import InfoProducto from "./components/infoProducto";

const PageInfoProductos = () => {
    return (
        <div className="max-w-screen-2xl py-8 mx-auto sm:py-32 sm:px-24">
            <div className="grid sm:grid-cols-2 bg-violet-500 rounded-lg p-10 gap-10 sm:gap-12">
                <div className="">
                    <ImgProducto />
                </div>
                <div className="">
                    <InfoProducto />
                </div>
            </div>
        </div>
    );
}

export default PageInfoProductos;