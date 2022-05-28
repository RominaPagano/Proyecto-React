import { useState } from "react";
import { useCartContext } from "../../Context/CartContext"
import { FiChevronDown,FiChevronUp } from "react-icons/fi"




export default function CartItem({product}) {
    const {removeItem} = useCartContext();
   
    
    
    
    return (
        <>
            <tbody>
                <tr>
                    <td>
                        <div className="main">
                            <div>
                                <img src={product.img} alt="" width={145}/>
                                <div className="des">
                                    <h5>{product.name}</h5>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <h5>${product.price}</h5>
                    </td>
                    <td>
                        <div className="counter">
                            <h5>{product.quantity}</h5>
                            
                            {/*<i className="fas fa-angle-down"><FiChevronDown/></i>
                            <input type="number" className="input-number" value={product.quantity}/>
                            <i className="fas fa-angle-up" ><FiChevronUp/></i>*/
                          }
                            
                    

                        </div>
                    </td>
                    <td>
                        <h5>${product.quantity*product.price} <button className="btn"onClick={()=>removeItem(product.id)}>x</button></h5>
                    </td>
                        
                </tr>
            </tbody>
        
        </>
    );
}