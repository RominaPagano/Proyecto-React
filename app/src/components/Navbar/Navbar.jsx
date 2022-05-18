import { Link, NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import logo from '/src/img/logo.jpg'

function Navbar (){
    return(
        <div className="contNav">
            <div className="navbar">
                <img className="logo" src={logo} alt="logo"/>

                <ul className="navLinks">
                    <li><NavLink to = '/'>Inicio</NavLink></li>

                    <li><NavLink to = '/category/vestidos'>Vestidos</NavLink></li>
                    <li><NavLink to = '/category/remeras'>Remeras</NavLink></li>
                    <li><NavLink to = '/category/pantalones'>Pantalones</NavLink></li>
                
                </ul>
                <CartWidget/>


            </div>
        </div>       
        
    )
}

export default Navbar