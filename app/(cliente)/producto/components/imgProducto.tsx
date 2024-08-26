import Image from "next/image";

const ImgProducto = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <Image src="/img/mision.svg" width={300} height={300} alt="Imagen del producto" />
            </div>
        </div>
    );
}

export default ImgProducto;