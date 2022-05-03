import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import logo from '/src/img/RominaLogo.png'

function Navbar (){
    return(
        <>
        <img className="logo" src={logo} alt="logo"/>

            <nav>
                <ul className="navLinks">
                    <li> <a href="#">Inicio</a></li>
                    <li> <a href="#">Productos</a></li>
                    <li> <a href="#">Sobre nosotros</a></li>
                    <li><a className="cta" href="#"><button>Contacto</button></a></li>
                </ul>
            </nav>
            <CartWidget/>
        </>
    )
}

export default Navbar