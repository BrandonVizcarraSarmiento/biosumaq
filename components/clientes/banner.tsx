import Image from "next/image";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator"


const Banner = () => {
    return (
        <div className="relative">
        <Image
          src="/img/banner.jpg"
          alt="Success"
          width={1000}
          height={1000}
          className="rounded-lg mx-auto"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-2">FishFood</h1>
          <span className="text-lg mb-4">Disfruta el sabor del mar en cada bocado</span>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Productos</Button>
          
        </div>
        <Separator/>
      </div>
      
        
        
    );
}

export default Banner;
