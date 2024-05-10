/* eslint-disable */
import TestLogo from "../assets/react.svg";


export default function NavBar() {
    return(
        <nav className="flex justify-between shadow-md p-4">
            <div className="left">
                <img src={TestLogo} className="pl-3" alt="logo"/>
            </div>
            <div className="flex">
                <a className="pr-5 cursor-pointer">Login</a>
                <a className="pr-3 cursor-pointer">Help</a>
            </div>
        </nav>
    )
}