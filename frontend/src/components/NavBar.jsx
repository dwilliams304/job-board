import React from "react";
import "../styles/components/navbar.css";


export default function NavBar(props) {
    return(
        <nav>
            <div className="left">
                <p>Logo</p>
            </div>
            <div className="right">
                <p>Login</p>
                <p>Help</p>
            </div>
        </nav>
    )
}