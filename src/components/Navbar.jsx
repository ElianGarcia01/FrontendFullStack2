import { NavLink } from "react-router-dom";


const routes = [
    { path: "/", name: "Home" },
    { path: "agents", name: "Agents" },
    { path: "details", name: "Details" },
]

function Navbar() {

    return (
        <nav >
            <ul className="flex justify-between p-8 bg-black">
                {routes.map((route) => (
                    <li key={route.path}>
                        <NavLink
                            to={route.path}
                            className={({
                                isActive }) =>
                            (isActive ?
                                "text-gray-400" :
                                "text-white hover:text-red-500")}
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