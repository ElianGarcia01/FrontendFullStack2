import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeCategory, changeSearch } from "../../store/actions/shopActios";

function SearchBar() {
  const { search, category } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const styles = {
    container: {
      marginBottom: "20px",
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    label: {
      display: "flex",
      flexDirection: "column",
      fontSize: "18px",
    },
    select: {
      padding: "5px",
      fontSize: "14px",
      marginTop: "5px",
    },
    input: {
      padding: "5px",
      fontSize: "14px",
      marginTop: "5px",
      width: "200px",
    },
  };
  return (
    <>
      <div className="my-6 w-full max-w-md mx-auto">
        <div className="w-full relative flex flex-col gap-10 justify-center items-center">
          {/* Input de busqueda por texto */}
          <label htmlFor="search" className="sr-only">
            Buscar libros
          </label>
          <input
            type="text"
            placeholder="Buscar libros..."
            value={search}
            onChange={(e) => dispatch(changeSearch(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
          <svg
            className="absolute right-3 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          {/* Select de busqueda por categoria */}
          <label style={styles.label}>
            Categoría:
            <select
              value={category}
              onChange={(e) => dispatch(changeCategory(e.target.value))}
              style={styles.select}
            >
              <option value="Todas">Todas</option>
              <option value="Fábula">Fábula</option>
              <option value="Distopía">Distopía</option>
              <option value="Realismo mágico">Realismo mágico</option>
              <option value="Clásico">Clásico</option>
              <option value="Juvenil">Juvenil</option>
              <option value="Narrativa">Narrativa</option>
              <option value="Drama">Drama</option>
              <option value="Fantasía">Fantasía</option>
              <option value="Romance">Romance</option>
            </select>
          </label>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
