import './App.css'
import Home from './pages/Home'
import Agents from './pages/Agents'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import StandarLayout from './layouts/StandarLayaout'
import SecondLayout from './layouts/SecondLayout'
import NotFound from "./pages/NotFound"
import Details from './pages/Details'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StandarLayout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "home",
          element: <Home />
        },
        {
          path: "agents",
          element: <Agents />
        }
      ]
    },
    {
      path: "/",
      element: <SecondLayout />,
      children: [
        {
          path: "*",
          element: <NotFound />
        },
        {
          path: "details",
          element: <Details />
        }
      ]
    }

  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
export default App
