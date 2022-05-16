import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { getFetch } from "../helpers/getFetch"



const ItemListContainer = ()=>{
    const [products, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()    

    useEffect(()=>{
        if(id){
            getFetch()
                .then(resp => setItem(resp.filter((prods)=>prods.category === id)))
                .catch((err)=>console.log(err))
                .finally (()=>setLoading(false))
        }else{
            getFetch()
                .then(resp => setItem(resp))
                .catch((err)=>console.log(err))
                .finally (()=>setLoading(false))

        }
    }, [id])

      
    return(

        <div className="container">
            {loading ?
            <h2>Loading...</h2>
            :
            <ItemList items={products}/>
            }
        </div>
    )
}

export default ItemListContainer