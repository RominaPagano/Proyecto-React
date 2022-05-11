
import Item from "../Item/Item"


const ItemList = ({items}) => {
      

    return (
        
        <div>
            {items.map((prod) => <Item key= {prod.id}
                                    name= {prod.name}
                                    price={prod.price}
                                    img=  {prod.img} />)}     
        </div>
    )
}

export default ItemList