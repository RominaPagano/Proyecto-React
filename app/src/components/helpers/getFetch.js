const products = [
    { 
        id: "1", 
        category: "remeras",    
        name: "Remera Soul",     
        price:100, 
        stock:9, 
        img: "https://images.pexels.com/photos/8973474/pexels-photo-8973474.jpeg?cs=srgb&dl=pexels-antoni-shkraba-production-8973474.jpg&fm=jpg"
    },
    { 
        id: "2", 
        category: "remeras",    
        name: "Remera Crazy",     
        price:200,  
        stock:8, 
        img: "https://images.pexels.com/photos/8973526/pexels-photo-8973526.jpeg?cs=srgb&dl=pexels-antoni-shkraba-production-8973526.jpg&fm=jpg"
    },
    { 
        id: "3", 
        category: "remeras",    
        name: "Remera Love",      
        price:300,  
        stock:2, 
        img: "https://images.pexels.com/photos/8973483/pexels-photo-8973483.jpeg?cs=srgb&dl=pexels-antoni-shkraba-production-8973483.jpg&fm=jpg"
    },
    { 
        id: "4", 
        category: "camisas",    
        name: "Camisa Pure",      
        price:100, 
        stock:1,  
        img: "https://images.pexels.com/photos/10120985/pexels-photo-10120985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    { 
        id: "5", 
        category: "camisas",    
        name: "Camisa Shine",    
        price:200,  
        stock:4, 
        img: "https://images.pexels.com/photos/10120732/pexels-photo-10120732.jpeg?cs=srgb&dl=pexels-cottonbro-10120732.jpg&fm=jpg"
    },
    { 
        id: "6", 
        category: "camisas",    
        name: "Camisa Sober",
        stock:8,     
        price:300, 
        stock:7,  
        img: "https://images.pexels.com/photos/10131742/pexels-photo-10131742.jpeg?cs=srgb&dl=pexels-cottonbro-10131742.jpg&fm=jpg"
    },
    { 
        id: "7", 
        category: "pantalones", 
        name: "Pantalon Oniria", 
        price:100, 
        stock:3,  
        img: "https://images.pexels.com/photos/8609201/pexels-photo-8609201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    { 
        id: "8", 
        category: "pantalones", 
        name: "Pantalon Pink",   
        price:200, 
        stock:6,  
        img: "https://images.pexels.com/photos/8973484/pexels-photo-8973484.jpeg?cs=srgb&dl=pexels-antoni-shkraba-production-8973484.jpg&fm=jpg"
    },
    { 
        id: "9", 
        category: "pantalones", 
        name: "Pantalon York",   
        price:300,  
        stock:10, 
        img: "https://images.pexels.com/photos/8973548/pexels-photo-8973548.jpeg?cs=srgb&dl=pexels-antoni-shkraba-production-8973548.jpg&fm=jpg"
    }
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


            
    
    
    


