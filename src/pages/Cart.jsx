import { useDispatch, useSelector } from "react-redux";
import QuantityControls from "../components/QuantityControls";
import { clearCart, removeFromCart } from "../../store/actions/cartActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const total = Object.values(products).reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const dispatch = useDispatch();

  function handleDeleteToCart(book) {
    dispatch(removeFromCart(book));
  }

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div style={styles.cartContainer}>
      <h2 className="text-center font-bold text-2xl">Carrito de Compras</h2>
      <table style={styles.cartTable}>
        <thead>
          <tr>
            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>
              Producto
            </th>
            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>
              Cantidad
            </th>
            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>
              Precio
            </th>
            <th style={{ ...styles.tableCell, ...styles.tableHeader }}>
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.values(products).map((product) => {
            return (
              <tr key={product.id}>
                <td style={styles.tableCell} className="flex flex-col">
                  {product.title}
                  <button
                    className="cursor-pointer hover:text-red-500"
                    onClick={() => handleDeleteToCart(product)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
                <td style={styles.tableCell}>
                  <QuantityControls book={product} />
                </td>
                <td style={styles.tableCell}>${product.price.toFixed(2)}</td>
                <td style={styles.tableCell}>
                  ${(product.quantity * product.price).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan="3"
              style={{ ...styles.tableCell, ...styles.totalLabel }}
            >
              Total
            </td>
            <td style={{ ...styles.tableCell, ...styles.totalValue }}>
              ${total.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="flex justify-center items-center">
              <button
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600
              text-white cursor-pointer mt-2"
                onClick={handleClearCart}
              >
                Delete
                <FontAwesomeIcon icon={faCartShopping} className="ml-2" />
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart

const styles = {
  cartContainer: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh", // Cambiado de "height" a "minHeight"
    display: "flex", // Para permitir que el contenido se ajuste al tamaño
    flexDirection: "column", // Asegura que los elementos se apilen verticalmente
  },
  cartTable: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  tableCell: {
    border: "2px solid #ddd",
    padding: "8px",
    textAlign: "center",
  },
  tableHeader: {
    backgroundColor: "#f4f4f4",
    fontWeight: "bold",
  },
  totalLabel: {
    textAlign: "right",
    fontWeight: "bold",
  },
  totalValue: {
    fontWeight: "bold",
    color: "#2c3e50",
  },
}
