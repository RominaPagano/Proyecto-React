const products = [
    { id: "1", category: "remeras",  name: "Remera",  price:100, img: "https://images.pexels.com/photos/8810328/pexels-photo-8810328.jpeg?cs=srgb&dl=pexels-los-muertos-crew-8810328.jpg&fm=jpg"},
    { id: "2", category: "remeras",  name: "Remera", price:200, img: "https://images.pexels.com/photos/8810328/pexels-photo-8810328.jpeg?cs=srgb&dl=pexels-los-muertos-crew-8810328.jpg&fm=jpg"},
    { id: "3", category: "remeras",  name: "Remera", price:300, img: "https://images.pexels.com/photos/8810328/pexels-photo-8810328.jpeg?cs=srgb&dl=pexels-los-muertos-crew-8810328.jpg&fm=jpg"},
    { id: "4", category: "vestidos", name: "Vestido", price:100, img: "https://images.pexels.com/photos/2173382/pexels-photo-2173382.jpeg?cs=srgb&dl=pexels-%D1%81%D0%BD%D0%B5%D0%B6%D0%B0%D0%BD%D0%B0-2173382.jpg&fm=jpg"},
    { id: "5", category: "vestidos", name: "Vestido", price:200, img: "https://images.pexels.com/photos/2173382/pexels-photo-2173382.jpeg?cs=srgb&dl=pexels-%D1%81%D0%BD%D0%B5%D0%B6%D0%B0%D0%BD%D0%B0-2173382.jpg&fm=jpg"},
    { id: "6", category: "vestidos", name: "Vestido", price:300, img: "https://images.pexels.com/photos/2173382/pexels-photo-2173382.jpeg?cs=srgb&dl=pexels-%D1%81%D0%BD%D0%B5%D0%B6%D0%B0%D0%BD%D0%B0-2173382.jpg&fm=jpg"},
    { id: "7", category: "pantalones", name: "Pantalon",   price:100, img: "https://images.pexels.com/photos/8810330/pexels-photo-8810330.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
    { id: "8", category: "pantalones", name: "Pantalon",   price:200, img: "https://images.pexels.com/photos/8810330/pexels-photo-8810330.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},
    { id: "9", category: "pantalones", name: "Pantalon",   price:300, img: "https://images.pexels.com/photos/8810330/pexels-photo-8810330.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}
]
    
   
export const getFetch = (id)=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const query = id
            ? products.find(product=> product.id === id)
            : products
            resolve (query)
        },2000)

    })

}
            
    
    
    


