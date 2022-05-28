import { useCartContext } from "../../Context/CartContext"
import "./Cart.css"

import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { RiDeleteBinLine} from "react-icons/ri";




export const Cart = () => {
  const{ cartList, deleteCart, totalPrice,  totalQty} = useCartContext()

  if(!totalQty()){
    return(

      <div>
        <h3>El carrito esta vacío</h3>
        <Link to = "/"><button className="bProducto">Ver productos</button></Link>  
      </div>

    )
  }  
  return (
    <>   
    
      <section className="mt-5">
        <div className="container">
          <div className="cart">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-color">
                  <tr>
                    <th scope="col" className="text-white">Producto</th>
                    <th scope="col" className="text-white">Precio</th>
                    <th scope="col" className="text-white">Cantidad</th>
                    <th scope="col" className="text-white">Total </th>
                    <button onClick={deleteCart} className="btn" ><RiDeleteBinLine/></button>
                              
                  </tr>
                </thead>
                {cartList.map(product => <CartItem key={product.id} product={product}/>)}
              </table>
              
            </div>
           </div>
         </div>
          
          <Link to = "/"><button className="bProducto">Ver lista de productos</button></Link> 
      </section>

       <div className="col-lg-4 offset-lg-4">
         <div className="checkout">
           <ul>
             <li className="cart-total">Total ${totalPrice()!== 0 && totalPrice()}</li>
           </ul>
           <a href="#" className="proceed-btn" >Comprar</a>
         </div>
       </div>
    </>
  )
         
}

        


  
{/*

  return (
    <>   
    
      <section className="mt-5">
        <div className="container">
          <div className="cart">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-color">
                  <tr>
                    <th scope="col" className="text-white">Producto</th>
                    <th scope="col" className="text-white">Precio</th>
                    <th scope="col" className="text-white">Cantidad</th>
                    <th scope="col" className="text-white">Total </th>
                    <button onClick={deleteCart} className="btn" ><RiDeleteBinLine/></button>                     
                  </tr>
                </thead>

                {cartList.map(product => 
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
                          
                         

                        </div>
                      </td>
                      <td>
                          <h5>${product.quantity*product.price} <button className="btn"onClick={()=>removeItem(product.id)}>x</button></h5>
                      </td>
                      
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
           </div>
         </div>
          
          <Link to = "/"><button className="bProducto">Ver lista de productos</button></Link> 
      </section>

       <div className="col-lg-4 offset-lg-4">
         <div className="checkout">
           <ul>
             <li className="cart-total">Total ${totalPrice()!== 0 && totalPrice()}</li>
           </ul>
           <a href="#" className="proceed-btn" >Comprar</a>
         </div>
       </div>
    </>
  )

                        */}

  


                      

                                                      


                        

             
       


                  
