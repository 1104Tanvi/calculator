import React from 'react'
import {Link} from "react-router-dom"
import './buttonstyles.css'
function Navbar() {
    return (
        <div>
            <nav id="nav">
                <ul id="links">
                <Link className="linkstyle " activelassName="firstlink" to="/">
                    <li>Home</li>
                </Link>
                    <Link className="linkstyle secondlink" to="/bmi">
                    <li>Bmi</li>
                    </Link>
                    <Link className="linkstyle thirdlink" to="/distance">
                    <li>Distance</li>
                    </Link>
                    <Link className="linkstyle fourthlink" to="/age">
                    <li>Age</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
