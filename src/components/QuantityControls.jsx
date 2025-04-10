import { useDispatch } from "react-redux";
import { addToCart, quitFromCart } from "../../store/actions/cartActions";

function QuantityControls({ book }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center text-white">
      <button
        className="cursor-pointer bg-blue-500 w-10 h-10 rounded-2xl font-bold"
        onClick={() => dispatch(addToCart(book))}
      >
        +
      </button>
      <span className="text-black">{book.quantity}</span>
      <button
      className="cursor-pointer bg-red-500 w-10 h-10 rounded-2xl font-bold"
      onClick={() => dispatch(quitFromCart(book))}
      >
        -
      </button>
    </div>
  );
}

export default QuantityControls;
