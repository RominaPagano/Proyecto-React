import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import logo from '/src/img/logo.jpg'

function Navbar (){
    return(
        <div className="contNav">
            <div className="navbar">
                <img className="logo" src={logo} alt="logo"/>

                <ul className="navLinks">
                    <Link to = '/'>
                    <li> <p>Inicio</p></li>
                    </Link>
                    <li> <p>Vestidos</p></li>
                    <li> <p>Remeras</p></li>
                    <li> <p>Short</p></li>
                    <p> <button className="bNeon">Contacto</button></p>
                </ul>
                <CartWidget/>


            </div>
        </div>       
        
    )
}

export default Navbar