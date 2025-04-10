import Body from "../Body";
import SearchBar from "../components/SearchBar";

export default function Home() {
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
