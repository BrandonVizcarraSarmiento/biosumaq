import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const InfoProducto = () => {
    return (
        <div className="space-y-4 p-4">
            <div className="space-y-4">
                <h2 className="font-bold">Nombre del producto</h2>
                <p className="px-2 py-1 text-sm text-white bg-blue-500 rounded-full w-fit">Precio</p>
            </div>
            <Separator />
            <div>
                <p>Descripcion</p>
            </div>
            <div className="flex justify-center">
                <Button>Contactanos</Button>
            </div>
        </div>
    );
}

export default InfoProducto;