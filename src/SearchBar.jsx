function SearchBar() {
    console.log("Se renderizo el componente SearchBar");
    
    return (
      <div className="flex justify-center h-10 w-full">
        <input
          className="h-full border border-gray-200 px-4 py-2 placeholder:text-gray-900"
          type="text"
          placeholder="Search"
        />
      </div>
    );
  }

  export default SearchBar;