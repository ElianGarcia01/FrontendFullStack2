import { useMemo } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Body({ books, search }) {
  // Filtro para buscar cada libro por su nombre en minuscualas
  // se hace la comparacion con el valor que toma search
  const filteredBooks = useMemo(
    () =>
      books.filter((book) =>
        book.nombre.toLowerCase().includes(search.toLowerCase())
      ),
    [books, search]
  );

  const isLoading = books.length === 0;

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-center gap-6 p-8">
        {Array(9)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="w-48 h-64">
              <Skeleton height={150} width="100%" />
              <Skeleton width={100} height={20} />
              <Skeleton width={200} height={20} />
              <Skeleton width={50} height={20} />
              <Skeleton width={30} height={30} circle />
            </div>
          ))}
      </div>
    );
  }

  if (filteredBooks.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="text-center">
          <p>
            El libro no ha sido encontrado. <br />
            Intenta una nueva busqueda
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="w-full h-20 text-center text-lg">
          <p>
            Mostrando {filteredBooks.length} de {books.length} resultados
          </p>
        </div>
        <div className="flex flex-wrap h-full w-full justify-center gap-6 p-8">
          {filteredBooks.map((book) => (
            <Card key={book.nombre} book={book}></Card>
          ))}
        </div>
      </>
    );
  }
}

function Card({ book }) {
  let precioType = "$" + book.precio;

  return (
    <div
      className={`flex flex-col p-4 gap-4 w-48 h-full rounded-2xl transition-all
    duration-200 ease-in-out transform hover:scale-110 hover:shadow-2xl`}
    >
      <div className="flex flex-wrap justify-center items-center h-12 w-full rounded-lg bg-gray-300">
        <h2 className="text-center text-md">{book.nombre.slice(0, 24)}</h2>
      </div>

      <div>
        <img src={book.imagen} alt={book.nombre} className="h-56 w-40" />
      </div>

      <div className="relative flex flex-col justify-between h-full">
        <p className="text-xs mb-3">{book.descripcion.slice(0, 90)}</p>
        <span className="self-end text-xs text-red-500">{precioType}</span>
      </div>
    </div>
  );
}

export default Body;
