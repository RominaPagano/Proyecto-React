import { FiChevronDown,FiChevronUp } from "react-icons/fi"
import { RiDeleteBinLine} from "react-icons/ri";

import { useCartContext } from "../../Context/CartContext"




export default function CartItem({product}) {
    const {removeItem, update} = useCartContext();
    
    return (
        <>
            <tbody>
                <tr>
                    <td>
                        <div className="main">
                            <div>
                                <img src={product.img} alt="" width={78}/>
                                <div className="des">
                                    <h5>{product.name}</h5>
                                </div>
                                <button className="btn"onClick={()=>removeItem(product.id)}><RiDeleteBinLine/></button>
                            </div>
                        </div>
                    </td>
                                    
                    <td>
                        <h5>${product.price}</h5>
                    </td>

                    <td>
                        <div className="counter">
                            <h5>{product.quantity}</h5>                        
                        </div>
                    </td>

                    <td>
                        <h5>${product.quantity*product.price}</h5>
                    </td>
                </tr>
            </tbody>        
        
        </>
    );
}
                        
    
    
    
    
                            
                    
