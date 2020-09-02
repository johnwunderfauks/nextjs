import React from "react"
import { Link } from "react-router-dom";
import logoSrc from '../images/logo.png'
import "./header.css"

const Navbar = ({ sticky }) => (
    <div id="header" className={sticky ? "navbar navbar-sticky" : "navbar"}>
        <div id="header-background" />
        <div id="header-content">
            <Link to="/" className="link-logo" >
                {/* <img id="logonew" src={require('../images/logo.png')} alt="ID21"/> */}
                <img id="logonew" src={logoSrc} alt="ID21" />
            </Link>
            <div id="header-right">
                <Link to="/contact" id="header-contact">
                    CONTACT
                    </Link>
                <div id="menu-burger" onClick={onToggleMenu} >
                    <div id='burger-top' />
                    <div id='burger-bottom' />
                    <h5 id="closed">CLOSE</h5>
                </div>
            </div>
        </div>
    </div>
)

export default Navbar