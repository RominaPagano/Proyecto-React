import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {ItemCount} from './components/ItemCount/itemCount'




function App() {
  
  

  return (
    <>
      
      <Navbar/>
      <ItemCount initial={1} stock={5} onAdd={(quantity)=>alert(`${quantity} productos`)}/>              
      
    </>
  )
}

export default App
  
      
      
    
     
    
      
      
      







  
      
      
      

      
            



