import { createContext, useContext, useState} from "react";


const CartContext = createContext ([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>{
    //estados y funciones globales
    const [cartList, setcartList] = useState([])

    function inCart(id){
        return cartList.some(product => product.id === id)
    }

    function addCart (item){
        if (inCart(item.id)){
            let i = cartList.findIndex(product => product.id === item.id)
            const newCartList = cartList
            newCartList[i].quantity += item.quantity
            setcartList(newCartList)
        }else{
            setcartList([
                ...cartList,
                item
            ])
        }
    }

    //const eliminarItem = (id) =>{}

    const deleteCart = () =>{
        setcartList ([])
    }

    return(
        <CartContext.Provider value={ {
             cartList,
             addCart,
             deleteCart          
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider




    