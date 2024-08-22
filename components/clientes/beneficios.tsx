import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const Beneficios = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">

  <h2 className="text-center">Beneficios</h2>

  <div className="w-full max-w-md"> {/* Max width to limit accordion size */}
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Beneficio 1?</AccordionTrigger>
        <AccordionContent className="text-left">
          Respuesta 1
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <Accordion type="single" collapsible>
      <AccordionItem value="item-2">
        <AccordionTrigger>Beneficio 2?</AccordionTrigger>
        <AccordionContent className="text-left">
          Respuesta 2
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <Accordion type="single" collapsible>
      <AccordionItem value="item-3">
        <AccordionTrigger>Beneficio 3?</AccordionTrigger>
        <AccordionContent className="text-left">
          Respuesta 3
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>

</div>



  );
}

export default Beneficios;