import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Productos from "./productos";
const imageUrls = [
  'img/logo.jpg',
  'img/image2.jpg',
  'img/image3.jpg',
  'img/image4.jpg',
  'img/image5.jpg',
];

const Slider = () => {
  return (
    <div className="mt-10 mb-10 p-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {imageUrls.map((url, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div>
                <Card>
                  <Productos />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </div>
  );
}

export default Slider;