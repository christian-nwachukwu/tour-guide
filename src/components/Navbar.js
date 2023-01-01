import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import index from "@babel/traverse";

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Mocha-House</h1>

                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a href="/">
                                    <i className={item.icon}></i>Home
                                </a>
                            </li>
                        );
                    })}    
                </ul>
            </nav>
        )
    }
}

export default Navbar