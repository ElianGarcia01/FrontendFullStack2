import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../store/actions/cartActions";
import QuantityControls from "./components/QuantityControls";

function Body() {
  // Estados globales
  const { books, category, search } = useSelector((state) => state.shop);

  // Filtros de busqueda combinados
  const filteredBooks = books.filter((item) => {
    const matchesCategory =
      category.toLowerCase() === "todas" ||
      item.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = item.nombre
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
  // Variable para precio del libro
  let precioType = "$" + book.precio;

  const dispatch = useDispatch();
  const bookInCart = useSelector((state) => state.cart[book.id]);

  function handleAddToCart() {
    dispatch(addToCart(book));
  }

  return (
    <div
      className={`flex flex-col p-4 gap-4 w-48 h-full rounded-2xl transition-all
    duration-400 ease-in-out transform  hover:shadow-2xl`}
    >
      <div className="flex flex-wrap justify-center items-center h-12 w-full rounded-lg bg-gray-300">
        <h2 className="text-center text-md">{book.nombre.slice(0, 24)}</h2>
      </div>

      <div className="flex justify-center items-center">
        {book.imagen && (
          <img src={book.imagen} alt={book.imagen} className="h-52 w-auto" />
        )}
      </div>

      <div className="relative flex flex-col justify-between h-full">
        <p className="text-xs mb-3">{book.descripcion.slice(0, 50)}...</p>
        <span className="self-end text-xs text-red-500">{precioType}</span>
        {bookInCart ? (
          <QuantityControls book={bookInCart} />
        ) : (
          <button
          className="w-full cursor-pointer hover:text-blue-500"
          onClick={() => handleAddToCart()}
          >
            Añadir al carrito <br />
            <FontAwesomeIcon
              icon={faCartShopping}
              className="text-lg"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default Body;
