const Beneficios = () => {
    return ( 
        <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Beneficios de nuestros productos
        </h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 text-left text-gray-600 font-semibold">Beneficio</th>
              <th className="py-2 text-left text-gray-600 font-semibold">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200">Beneficio 1</td>
              <td className="py-3 px-4 border-b border-gray-200">Descripción del beneficio 1</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200">Beneficio 2</td>
              <td className="py-3 px-4 border-b border-gray-200">Descripción del beneficio 2</td>
            </tr>
            <tr>
              <td className="py-3 px-4 border-b border-gray-200">Beneficio 3</td>
              <td className="py-3 px-4 border-b border-gray-200">Descripción del beneficio 3</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      
    );
}
 
export default Beneficios;