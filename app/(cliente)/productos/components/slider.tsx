import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const imageUrls = [
    'img/logo.jpg',
    'img/image2.jpg',
    'img/image3.jpg',
    'img/image4.jpg',
    'img/image5.jpg',
  ];

const Slider = () => {
    return (
        <div>


<Carousel
  opts={{
    align: "start",
  }}
  className="w-full max-w-4xl"
>
  <CarouselContent className="flex space-x-4"> {/* Agregamos espacio horizontal */}
    {imageUrls.map((url, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-2">
          <Card className="w-80 h-80 m-4"> {/* Agregamos margen alrededor del contenedor */}
            <CardContent className="flex items-center justify-center w-full h-full p-4">
              <img
                src={url}
                alt={`Imagen ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>





</div>

    );
}

export default Slider;