
function Body({ products, search, handleFavorite }) {

  // Filtro el arreglo de libros, busco con el filtro por cada libro su nombre y lo convierto a minuscualas
  // Y tambien convierto a minusculas el nuevo valor de search para comparar y formar un nuevo arreglo
  // de libros filtrados que contengan los mismo valores del search en el nombre
  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          product={product}
          handleFavorite={handleFavorite}
        ></Card>
      ))}
    </div>
  );
}

function Card({ product, handleFavorite }) {
  let precioType = "$" + product.price


  return (
    <div className={`flex flex-col bg-gray-200 p-4 gap-4 w-48 h-64 rounded-sm`}>
      <div className="flex flex-wrap justify-center items-center h-12 w-full rounded-sm bg-gray-400">
        <p className="text-sm">{product.title.slice(0,10)}</p>
      </div>

      <div className="relative flex flex-col justify-between h-full">
        <p className="text-xs">{product.description.slice(0,90)}</p>
        <span className="self-end text-xs">{precioType}</span>
        <button onClick={() => handleFavorite(product.id)}
        className="absolute bottom-0 bg-sky-400">
          {product.isStarred?"🌟":"⭐"}
        </button>
      </div>
    </div>
  );
}

export default Body
