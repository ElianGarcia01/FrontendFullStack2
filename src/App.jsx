import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StandarLayout from "./layouts/StandarLayaout";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StandarLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },

  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
