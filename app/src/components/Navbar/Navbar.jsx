
import { Link, NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";
import logo from '/src/img/logo.jpg'
import { FiMenu } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";


function Navbar (){
    return(
        <>
        <header className="header">
            <div className="container">
                <div className="btn-menu">
                    <label htmlFor="btn-menu" className="icon-menu"> <FiMenu/> </label>
                </div>
                <div className="logo">
                    <img src={logo} alt="logo" width={50}/>
                </div>
                    
                    <nav className="menu">
                       <NavLink to = '/'>Inicio</NavLink>
                       <NavLink to = '/'>Nosotros</NavLink>
                       <NavLink to = '/'>Contacto</NavLink>
                        
                    </nav>
            </div>
        </header>
                
        <div className="capa"></div>

        <input type="checkbox" id="btn-menu" />
        <div className="container-menu">
            <div className="cont-menu">
                <nav>
                    <NavLink to = '/'>Inicio</NavLink>
                    <NavLink to = '/category/remeras'>Remeras</NavLink>
                    <NavLink to = '/category/camisas'>Camisas</NavLink>
                    <NavLink to = '/category/pantalones'>Pantalones</NavLink>
                    <CartWidget/>
                </nav>
                <label htmlFor="btn-menu" className="icon-equis"><FiChevronLeft/></label>
            </div>
        </div>
                        
                       
        

        </>
        
                  
        
    )
}

/*PRIMER ESTILO
<div className="contNav">
            <div className="navbar">
                <img className="logo" src={logo} alt="logo"/>

                <ul className="navLinks">
                    <li><NavLink to = '/'>Inicio</NavLink></li>

                    <li><NavLink to = '/category/remeras'>Remeras</NavLink></li>
                    <li><NavLink to = '/category/camisas'>Camisas</NavLink></li>
                    <li><NavLink to = '/category/pantalones'>Pantalones</NavLink></li>
                
                </ul>
                <CartWidget/>


            </div>
        </div> 
*/

export default Navbar