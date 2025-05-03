import { useDispatch, useSelector } from "react-redux";
import Body from "../Body";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { getProducts } from "../../store/actions/shopActios";
import { statusHttp } from "../../store/reducers/shopReducer";

export default function Home() {
  
  const {status} = useSelector((state) => state.shop.productsState)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status !== statusHttp.IDLE) {
      return
    }
   
    dispatch(getProducts())
  }, [dispatch, status])
  
  return (
    <>
      {/* Contenedor principal */}
      <div>
        <SearchBar />
        <Body />
      </div>
    </>
  );
}
