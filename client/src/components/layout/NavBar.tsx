
/*
    The NavBar is present on all pages, and will always show at the top
    We currently don't take in any props and instead of hard-coded links
    to various pages

    We will likely want to change this in the future to instead take props
    for the navlinks for more customization
*/

import TestLogo from "../../assets/react.svg";
import { MdHelpOutline } from "react-icons/md";
import { ScrollToTop } from "../../data/utils";
import { NavLink, useNavigate } from "react-router-dom";
export default function NavBar() {
    const navTo = useNavigate();


    return(
        <nav className="z-50 sticky top-0 flex justify-between p-4 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
            {/* Page title and icon */}
            <span className="left flex align-middle cursor-pointer" onClick={() => ScrollToTop(true)}>
                <img src={TestLogo} className="md:px-3" alt="logo" onClick={() => navTo("/")}/>
                <NavLink id="RouterNavLink" to='/' className="invisible md:visible">
                    TypeScript Job Board
                </NavLink>
            </span>

            {/* Left side, all other nav links */}
            <div className="flex align-middle">
                {/* {
                    props.loggedIn ?
                    <NavLink id="RouterNavLink" to='/profile' className="px-4 cursor-pointer">
                        Profile
                    </NavLink>
                    :
                } */}
                <NavLink id="RouterNavLink" to='/login' className="px-4 cursor-pointer">
                    Login
                </NavLink>
                <span className="cursor-pointer px-4 flex">
                    <NavLink id="RouterNavLink" to='/help'>
                        Help
                    </NavLink> 
                    <MdHelpOutline/>
                </span>
            </div>
        </nav>
    )
}