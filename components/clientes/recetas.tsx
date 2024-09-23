import Image from 'next/image';

const Recetas = () => {
  return (
    <div className=" p-5 border-2 border-black rounded-lg  dark:border-white dark:rounded-lg"> {/* Aquí se añaden los estilos de borde */}
      <section className="text-center">
        <Image src="/img/logoRecetas.png" alt="Logo de Recetas" width={150} height={50} />
        <h2 className="text-4xl font-bold">Cocina con Nosotros</h2>
        <div className="flex justify-center">
          <Image src="/img/Receta.png" alt="Imagen de la receta" width={900} height={500} className="mx-auto" />
        </div>
        <h2 className="text-6xl"> <strong>Hamburguesa</strong>  <br /> <span className="text-green-600"> <strong>con ensalada</strong> </span></h2>
      </section>
      <section className="flex justify-around my-4">
        <div className="text-center">
          <Image src="/img/tiempo.png" alt="Icono de tiempo" width={30} height={30} />
          <p>Tiempo <span className="font-semibold">5 min</span></p>
        </div>
        <div className="text-center">
          <Image src="/img/usuario.png" alt="Icono de usuario" width={30} height={30} />
          <p>Raciones <span className="font-semibold">1 persona</span></p>
        </div>
        <div className="text-center">
          <Image src="/img/cubiertos-de-restaurante.png" alt="Icono de dificultad" width={30} height={30} />
          <p>Dificultad <span className="font-semibold">Fácil</span></p>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4">
        <div className='p-20'>
          <h3 className="font-bold text-lg">Ingredientes</h3>
          <ul className="list-disc ml-5">
            <li>2 Hamburguesas FishFood</li>
            <li>1 Tomate</li>
            <li>1/4 de Lechuga</li>
            <li>Limón y Sal a gusto</li>
          </ul>
          <p className="mt-3 italic">Tip para Mamá: <br /> Agrega sabor a tu ensalada con hierbas frescas como cilantro, perejil, albahaca o menta, y utiliza especias como pimienta, comino o pimentón para añadir un toque extra de sabor sin calorías adicionales.</p>
        </div>
        <div className='p-20'>
          <h3 className="font-bold text-lg">Elaboración</h3>
          <p><strong>Paso 1:</strong> <br /> Calienta una sartén grande a fuego medio-alto, añade aceite y coloca las hamburguesas en la sartén; cocina durante aproximadamente 4-5 minutos hasta que estén doradas y cocidas en el centro.</p><br />
          <p><strong>Paso 2:</strong> <br /> Mientras las hamburguesas se cocinan, prepara la ensalada. Lava y seca la lechuga y los tomates, colócalos en un bol grande y condiméntalos con limón y sal al gusto.</p> <br />
          <p><strong>Paso 3:</strong> <br /> Una vez que las hamburguesas de pescado estén listas, sírvelas junto con la ensalada fresca. Puedes colocar las hamburguesas en panecillos para hamburguesas o disfrutarlas sin pan, según tu preferencia.</p>
        </div>
      </section>
    </div>
  );
}

export default Recetas;
