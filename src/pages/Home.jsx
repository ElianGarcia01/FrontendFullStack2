import { useDispatch } from "react-redux";
import Body from "../Body";
import SearchBar from "../components/SearchBar";
import { useEffect } from "react";
import { getProducts } from "../../store/actions/shopActios";

export default function Home() {
  
  const dispatch = useDispatch()

  useEffect(() => {
   
    dispatch(getProducts())
  }, [dispatch])
  
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
