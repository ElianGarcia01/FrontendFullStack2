import SearchBar from "./SearchBar";

function Navbar() {

    console.log("Se renderizo el componente NavBar");
    
    return (
        <nav >
            <ul className="flex justify-between py-4 px-8 text-stone-300 bg-green-800">
                <li>
                    <a href="/#">Home</a>
                </li>
                <li>
                    <SearchBar></SearchBar>
                </li>
                <li>
                    <a href="/#">Logo</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;