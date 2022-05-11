import { useState } from "react";
import "./ItemCount.css"


export function ItemCount({stock,initial,onAdd}){

    const [count, setCount] = useState (initial)

    function sumar(){
        if(count < stock){
            setCount (count+1);
        }
    } 
    function restar(){
        if (count > 1){
            setCount(count-1);            
        }
    }

    function agregar(){
        onAdd (count);
    }

    return(
        <div>
            <button  onClick={restar} >-</button>
            <button  onClick={sumar}>+</button>
            <p>{count}</p>
            <button className="bCard" onClick={agregar}>Agregar</button>
        </div>
        
    )    
}
        
            
        
            
                

    
            
            
    
    
    
    



    
    
    
        
        

        


