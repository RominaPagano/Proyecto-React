import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"

import ItemList from "../ItemList/ItemList"



const ItemListContainer = ()=>{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    const {category} = useParams()    



    useEffect(()=>{
        const db = getFirestore()
        
        const queryCollection = collection(db,"products")
        const queryCollectionFilter = category ? query(queryCollection, where("category", "==" , category)):queryCollection
        getDocs(queryCollectionFilter)
            .then (resp => setProducts(resp.docs.map(product => ({ id:product.id, ...product.data() }))))
            .catch((err)=>console.log(err))
            .finally (()=>setLoading(false))           
        
}, [category])
        
return(
    <div className="container">
        {loading ?
                <div class="containerLoader">
                    <div class="loader loader-13">
                    <div class="css-heart heart1"></div>
                    <div class="css-heart heart2"></div>
                    <div class="css-heart heart3"></div>
                    <div class="css-heart heart4"></div>
                    </div>
                </div>
        :
        <ItemList products={products}/>
        }
    </div>
)
        
            
}

export default ItemListContainer
        
                
    

    
        


    
      
