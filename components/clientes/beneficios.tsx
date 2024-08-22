import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const Beneficios = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Beneficio 1?</AccordionTrigger>
          <AccordionContent>
            Respuesta 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Beneficio 2?</AccordionTrigger>
          <AccordionContent>
            Respuesta 2
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Beneficio 3?</AccordionTrigger>
          <AccordionContent>
            Respuesta 3
          </AccordionContent>
        </AccordionItem>
      </Accordion>


    </div>


  );
}

export default Beneficios;