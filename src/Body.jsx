import { useState } from "react";

function Body({ books }) {
  const [search, setSearch] = useState("");

  function handleSearchChange(event) {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <>
      {" "}
      <SearchBar search={search} handleSearchChange={handleSearchChange}></SearchBar>
      <div className="flex flex-wrap justify-center gap-6 p-8">
        {books.map((book) => (
          <Card
            key={book.name + book.price}
            name={book.name}
            description={book.description}
            price={book.price}
          ></Card>
        ))}
      </div>
    </>
  );
}

function SearchBar({search,handleSearchChange}) {
  return (
    <div className="flex justify-center mt-10 h-10 w-full">
      <input 
        className="h-full border border-gray-200 px-4 py-2 placeholder:text-gray-900"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
}

function Card({ name, description, price }) {
  let precioType = "$" + price;

  return (
    <div className="flex flex-col bg-gray-200 p-4 gap-4 w-48 h-64 rounded-sm">
      <div className="flex flex-wrap justify-center items-center h-12 w-full rounded-sm   bg-gray-400">
        <p className="text-sm">{name}</p>
      </div>

      <div className="flex flex-col justify-between h-full">
        <p className="text-xs">{description}</p>
        <span className="self-end text-xs">{precioType}</span>
      </div>
    </div>
  );
}

export default Body;
