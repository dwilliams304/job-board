/* eslint-disable */
import TestLogo from "../assets/react.svg";
import { MdHelpOutline } from "react-icons/md";


export default function NavBar() {
    return(
        <nav className="flex justify-between shadow-md p-4">
            <div className="left flex align-middle">
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