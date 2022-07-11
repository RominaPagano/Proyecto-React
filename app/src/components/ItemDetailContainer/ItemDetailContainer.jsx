import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import ItemDetail from '../ItemDetail/ItemDetail'
import "./loader.css"

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(true)
    
    const {id} = useParams()
    
    useEffect(()=>{
       const db = getFirestore()
       const dbQuery = doc(db, "products", id)
       getDoc(dbQuery)
        .then(resp => setProduct ( { id : resp.id, ...resp.data() } ) )
        .catch((err) => {console.log(err)})
        .finally(() => setLoader(false))
        
    },[id])


    return(
        <div>
            {loader ?
            <div class="containerLoader">
  
                <div class="loader loader-13">
                <div class="css-heart heart1"></div>
                <div class="css-heart heart2"></div>
                <div class="css-heart heart3"></div>
                <div class="css-heart heart4"></div>
            </div>
          
            </div>
            :    

            <ItemDetail product = {product} />

            }
        </div>
        )
    }
    


    

            
            
            
            


