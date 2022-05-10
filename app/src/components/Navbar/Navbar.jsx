import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import logo from '/src/img/logo.jpg'

function Navbar (){
    return(
        <div className="contNav">
            <div className="navbar">
                <img className="logo" src={logo} alt="logo"/>

                <ul className="navLinks">
                    <li> <a href="#">Inicio</a></li>
                    <li> <a href="#">Productos</a></li>
                    <li> <a href="#">Sobre nosotros</a></li>
                    <a  href="#"><button className="bNeon">Contacto</button></a>
                </ul>
                <CartWidget/>


            </div>
        </div>
            
            
        
        
        /*
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
        */
        
        
    )
}

export default Navbar