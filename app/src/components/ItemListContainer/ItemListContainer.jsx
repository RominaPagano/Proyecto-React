import { useState,useEffect } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"


const productos = [
    {id:1, name: "Remera", price:100, img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {id:2,name: "Vestido",price:200,img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {id:3,name: "Short",price:300,img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}

]

const getFetch = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve (productos)
    },2000)
})


const ItemListContainer = ()=>{
    const [productos, setItem] = useState([])
    

    useEffect(()=>{
        getFetch
            .then((res => setItem(res)))
            .catch((err)=>console.log(err))
    }, [])

   
    return(

        <div className="container">
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer