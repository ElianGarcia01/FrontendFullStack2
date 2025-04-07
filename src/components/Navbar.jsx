import { NavLink } from "react-router-dom";


const routes = [
    { path: "/", name: "Home" },
    { path: "agents", name: "Agents" },
    { path: "details", name: "Details" },
]

function Navbar() {

    return (
        <nav >
            <ul className="flex justify-between py-4 px-8 text-stone-300 bg-green-800">
                {routes.map((route) => (
                    <li key={route.path}>
                        <NavLink
                            to={route.path}
                            className={({
                                isActive }) =>
                            (isActive ?
                                "text-gray-400" :
                                "text-stone-300")}
                        >
                            {route.name}
                        </NavLink>
                    </li>
                ))}
            </ul >
        </nav >
    )
}

export default Navbar