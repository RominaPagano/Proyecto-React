import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import logo from '/src/img/logo.jpg'

function Navbar (){
    return(
        
        <header>
        <img className="logo" src={logo} alt="logo"/>

            <nav>
                <ul className="navLinks">
                    <li> <a href="#">Inicio</a></li>
                    <li> <a href="#">Productos</a></li>
                    <li> <a href="#">Sobre nosotros</a></li>
                    <li><a className="cta" href="#"><button className="bNeon">Contacto</button></a></li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
        
        
    )
}

export default Navbar