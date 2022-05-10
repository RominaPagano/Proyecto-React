import { ItemCount } from "../ItemCount/itemCount"



const ItemListContainer = ({saludo="saludo"})=>{
   
    return(
        <div>
            {saludo}
            
            <ItemCount initial={1} stock={5} onAdd={(quantity)=>alert(`${quantity} productos`)}/>  
        </div>
    )
}

export default ItemListContainer