import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const routes = [
  { path: "/", name: "StoreBooks" },
];

function Navbar() {
  // Acceder al estado global
  const cart = useSelector((state) => state.cart);
  const totalQuantity = Object.values(cart).reduce(
    (acc, book) => acc + book.quantity, 0
  )  
  
  return (
    <nav>
      <ul className="flex justify-between p-8 bg-black">
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive ? "text-gray-400" : "text-white hover:text-red-500"
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}
        <NavLink to="/cart">
          <div>
            <span>🛒</span>
            <span className="text-white">{totalQuantity}</span>
          </div>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
