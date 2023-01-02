import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Tour-Guide</h1>

                <div className="menu-icon" onClick = 
                {this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className="nav-menu">
                {MenuItems.map( (item, index) => {
                    return (
                        <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    <i className={item.nav}></i>{item.title}
                                </a>
                        </li> 
                    );
                } )} 

                <button>Sign Up</button> 
                </ul>
            </nav>
        )
    }
}

export default Navbar