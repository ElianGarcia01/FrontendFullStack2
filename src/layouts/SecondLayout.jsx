import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function SecondLayout() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>)
}