import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { addToCart, removeFromCart } from "../store/actions/cartActions";
import QuantityControls from "./components/QuantityControls";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";
import { deleteProducts, updateProducts } from "../store/actions/shopActios";
import { statusHttp } from "../store/reducers/shopReducer";
import { useState } from "react";

function Body() {
  // Estados globales
  const { productsState, category, search } = useSelector(
    (state) => state.shop
  );
  const books = productsState.products;
  const statusState = productsState.status;

  // Filtros de busqueda combinados
  const filteredBooks = books.filter((item) => {
    const matchesCategory =
      category.toLowerCase() === "todas" ||
      item.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (statusState === statusHttp.PENDING) {
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
            <FontAwesomeIcon icon={faCircleExclamation} className="ml-2" />
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
  let precioType = "$" + book.price;

  const dispatch = useDispatch();
  const bookInCart = useSelector((state) => state.cart[book.id]);

  const [deleteState, setDeleteState] = useState(statusHttp.IDLE);
  const [updateState, setUpdateState] = useState(statusHttp.IDLE);

  function handleAddToCart() {
    dispatch(addToCart(book));
  }

  async function handleDeleteProduct(id) {
    try {
      setDeleteState(statusHttp.PENDING);
      await dispatch(deleteProducts(id)).unwrap();
      setDeleteState(statusHttp.SUCCED);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(removeFromCart(book));
      setDeleteState(statusHttp.IDLE);
    }
  }

  async function handleUpdateProduct(book) {
    try {
      setUpdateState(statusHttp.PENDING);
      await dispatch(updateProducts(book)).unwrap();
    } catch (error) {
      console.log(error);
    } finally {
      setUpdateState(statusHttp.IDLE);
    }
  }

  return (
    <div
      className={`flex flex-col p-4 gap-4 w-48 h-full rounded-2xl transition-all
    duration-400 ease-in-out transform  hover:shadow-2xl`}
    >
      <div className="flex flex-wrap justify-center items-center h-12 w-full rounded-lg bg-gray-300">
        <h2 className="text-center text-md">{book.title.slice(0, 24)}</h2>
      </div>

      <div className="flex justify-center items-center">
        {book.image && (
          <img src={book.image} alt={book.image} className="h-52 w-auto" />
        )}
      </div>

      <div className="relative flex flex-col justify-between items-center h-full">
        <p className="text-xs mb-3">{book.description.slice(0, 50)}...</p>
        <span className="self-center text-lg text-red-500">{precioType}</span>
        {bookInCart ? (
          <QuantityControls book={bookInCart} />
        ) : (
          <button
            className="w-full cursor-pointer hover:text-blue-500"
            onClick={() => handleAddToCart()}
          >
            <FontAwesomeIcon icon={faCartPlus} className="ml-2" /> <br />
            Añadir al carrito
          </button>
        )}
        {deleteState === statusHttp.PENDING ? (
          <div>Eliminando...</div>
        ) : (
          <button
            className="w-1/2 cursor-pointer bg-red-500 hover:bg-red-700
                  text-white mt-2 rounded-2xl"
            onClick={() => handleDeleteProduct(book.id)}
          >
            Eliminar
          </button>
        )}
        {updateState === statusHttp.PENDING ? (
          <div>Updating...</div>
        ) : (
          <button
            className="w-1/2 cursor-pointer bg-green-500 hover:bg-green-700
                  text-white mt-2 rounded-2xl"
            onClick={() => handleUpdateProduct(book)}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default Body;
