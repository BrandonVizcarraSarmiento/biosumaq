import Footer from "@/components/clientes/footer";
import Navbar from "@/components/clientes/navbar";
import Redes from "@/components/clientes/redes";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

const InfoNovedades = () => {
    return (
        <div>
            <Navbar />
            <Redes />
            <div className="flex flex-col items-center justify-center p-6">
                <div>
                    <img
                        src="/img/feritac.avif"
                        alt="Imagen del evento"
                        className="w-[1000px] h-[500px] object-cover mx-auto" // Imagen de 300px x 300px
                    />
                </div>
                <div className="mt-4 text-center">
                    <h2 className="text-3xl font-bold mb-2">Evento principal</h2> {/* Subtítulo más grande y en negrita */}
                    <span className="text-sm text-gray-500">28/08/2024</span> {/* Texto pequeño y color menos resaltante */}
                    <p className="text-justify mt-4 px-5" >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed vitae aut a fugit corrupti porro ratione iure neque saepe, voluptates inventore, eveniet aspernatur amet aliquid unde ipsam animi. Voluptatum, tempora animi! Quasi deserunt pariatur adipisci a minus maiores error at repellendus, nemo nam vitae quia voluptatibus reiciendis vel assumenda perspiciatis blanditiis sit laudantium itaque similique eligendi consequuntur culpa. Quo veritatis praesentium quos beatae enim distinctio accusantium ducimus animi reprehenderit facere. Expedita delectus quis tempore quam magnam accusamus, nobis molestiae suscipit dolorem veniam inventore ea, at facilis hic! Doloremque perspiciatis voluptate est ea omnis eveniet numquam ex esse, veritatis vitae modi molestiae ipsum deserunt repellat architecto iure. Totam dignissimos consequuntur, vel ab excepturi laboriosam maxime saepe. Quo atque quisquam, corrupti non at soluta itaque mollitia harum a quas saepe cupiditate quam dignissimos dolore autem nihil, eveniet officia, in sit! Aut dolore et laudantium beatae, saepe expedita quas minima tempora consectetur rem a, amet autem unde quidem. Dolores animi neque quis at. Inventore rem odit consectetur laudantium veritatis, quas magni molestiae et accusamus itaque adipisci, consequatur explicabo quis? Odio, deleniti saepe molestiae vero ipsum quisquam possimus reprehenderit impedit. Sit, iure animi ratione modi beatae velit veniam quia sunt adipisci quasi expedita? Maxime.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default InfoNovedades;