/* eslint-disable */
import TestLogo from "../assets/react.svg";
import { MdHelpOutline } from "react-icons/md";


export default function NavBar() {
    return(
        <nav className="sticky top-0 flex justify-between shadow-md p-4 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
            <div className="left flex align-middle cursor-pointer">
                <img src={TestLogo} className="px-3" alt="logo"/>
                <p>TypeScript Job Board</p>
            </div>
            <div className="flex align-middle">
                <a className="pr-5 cursor-pointer">Login</a>
                <span className="cursor-pointer pr-3 flex">
                    <a>Help</a> 
                    <MdHelpOutline/>
                </span>
            </div>
        </nav>
    )
}