import TestLogo from "../../assets/react.svg";
import { MdHelpOutline } from "react-icons/md";
import { ScrollToTop } from "../../utils";
import { NavLink } from "react-router-dom";


export default function NavBar() {


    return(
        <nav className="z-50 sticky top-0 flex justify-between p-4 bg-gradient-to-b from-blue-900 to-blue-700 text-white">
            <span className="left flex align-middle cursor-pointer" onClick={() => ScrollToTop(true)}>
                <img src={TestLogo} className="px-3" alt="logo"/>
                <NavLink id="RouterNavLink" to='/'>
                    TypeScript Job Board
                </NavLink>
            </span>
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