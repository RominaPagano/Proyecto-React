import { useState } from "react";
import "./ItemCount.css"

export function ItemCount({stock,initial,onAdd, handleInter}){
    const [count, setCount] = useState (initial)


    function increase(){
        if(count < stock){
            setCount (count+1)
        }
    } 
    function decrease(){
        if (count > 1){
            setCount(count-1)         
        }
    }

    function addCart(){
        onAdd(count);
        handleInter();
        
        
    }

    return(
        <div className="divCount">
            <button  onClick={decrease}>-</button>
            <button  onClick={increase}>+</button>
            <p>{count}</p>
            <button  className="bCard" onClick={()=>addCart(count)}>Agregar al carrito</button>
        </div>
    )    
}


        
        
            
        
            
                

    
            
            
    
    
    
    



    
    
    
        
        

        


