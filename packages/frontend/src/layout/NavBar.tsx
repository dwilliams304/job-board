import { useState } from "react"; //TEMPORARY
import TestLogo from "../assets/react.svg";
import { MdHelpOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../helpers";
import { ProfileDropDown } from "../components";


export default function NavBar() {
    const [loginState, useLoginState] = useState(false);

    return(
        <nav className="sticky top-0 flex justify-between p-4 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
            <Link to='/' onClick={() => ScrollToTop(true)} className="left flex align-middle cursor-pointer">
                <img src={TestLogo} className="px-3" alt="logo"/>
                <p>TypeScript Job Board</p>
            </Link>
            <div className="flex align-middle">
                {
                    loginState ?
                    <ProfileDropDown />
                    :
                    <Link to='/login' className="px-4 cursor-pointer">Login</Link>
                }
                <span className="cursor-pointer px-4 flex">
                    <Link to='/help'>Help</Link> 
                    <MdHelpOutline/>
                </span>
            </div>
        </nav>
    )
}