
import { ItemCount } from "../ItemCount/itemCount"
import './ItemDetail.css'

const ItemDetail = ({product}) => {
  return (
    <section className='container sproduct my-5 pt-5 me-5'>
      <div className='row mt-50'>
        <div className='col-lg-5 col-md-12 col-12'>
          <img className='img-fluid pb-1' src={product.img}  width={400} alt="" />
        </div>

        <div className='col-lg-6 col-md-12 col-12 mt-5'>        
          <h3 className='py-4'>{product.name}</h3>
          <h2>${product.price}</h2>
          <h4 className='m-5 mb-5'>Detalle del producto</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Pariatur, doloremque quibusdam id iure assumenda natus voluptates
            culpa at unde quis illo. Dolores cum ea velit aspernatur dignissimos
            reprehenderit? Consectetur, quisquam.
          </span>

          <ItemCount initial={1} stock={5} onAdd={(quantity)=>alert(`${quantity} productos`)}/>
        </div>
      </div>
    </section>
  )
}

export default ItemDetail










  

  
  
          
      
      
      
      