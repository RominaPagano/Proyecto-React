const products = [
    {id: "1", category: "Remeras" ,name: "Remera", price:100, img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {id: "2" ,category: "Remeras",name: "Remeras",price:200,img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {id: "3" ,category: "Remeras",name: "Remeras",price:300,img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {id: "4" , category: "Vestidos" ,name: "Vestido", price:100, img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {id: "5" ,category: "Vestidos",name: "Vestido",price:200,img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {id: "6" ,category: "Vestidos",name: "Vestido",price:300,img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {id: "7" , category: "Short" ,name: "Short", price:100, img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {id: "8" ,category: "Short",name: "Short",price:200,img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"},
    {id: "9" ,category: "Short",name: "Short",price:300,img: "https://images.unsplash.com/photo-1542114551-ed4aed241d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}
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
            
    
    
    


