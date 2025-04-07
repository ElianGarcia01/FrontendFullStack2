import Body from "../Body";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <>
      {/* Contenedor principal */}
      <div className="flex flex-col justify-center items-center min-h-screen h-full w-full">
        <SearchBar />
        <Body />
      </div>
    </>
  );
}
