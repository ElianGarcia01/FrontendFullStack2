function Body({ books, search }) {
  // console.log("Se renderizo el componente Body");

  console.log("valor de search",search);
  

  // Filtro el arreglo de libros, busco con el filtro por cada libro su nombre y lo convierto a minuscualas
  // Y tambien convierto a minusculas el nuevo valor de search para comparar y formar un nuevo arreglo
  // de libros filtrados que contengan los mismo valores del search en el nombre
  const filteredBooks = books.filter((book) => book.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {filteredBooks.map((book) => (
        <Card
          key={book.name + book.price}
          name={book.name}
          description={book.description}
          price={book.price}
        ></Card>
      ))}
    </div>
  );
}

function Card({ name, description, price }) {
  let precioType = "$" + price;

  // console.log("Se renderizo el componente Card",name);

  return (
    <div className={`flex flex-col bg-gray-200 p-4 gap-4 w-48 h-64 rounded-sm`}>
      <div className="flex flex-wrap justify-center items-center h-12 w-full rounded-sm bg-gray-400">
        <p className="text-sm">{name}</p>
      </div>

      <div className="relative flex flex-col justify-between h-full">
        <p className="text-xs">{description}</p>
        <span className="self-end text-xs">{precioType}</span>
      </div>
    </div>
  );
}

export default Body;
