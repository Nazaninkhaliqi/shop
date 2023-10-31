import { createContext, useState } from "react";
export const shopContext = createContext(null);



export const ShopContextProvider=(props)=>{
        const[cartItems,setCartItems]=useState([])
        const addTocart =(itemId)=>{
        setCartItems([...cartItems , {id:itemId , count:1}])
        }
        const removeFromCart=(itemId)=>{
                setCartItems(cartItems.map((i)=>{
                        if (i.id ===itemId)
                        return {...i , count : i.count - 1}
                        else return i 
                }))
        }
        const contextValue = {cartItems,addTocart,removeFromCart}
        return <ShopContextProvider value={contextValue}>
                {props.children}
                </ShopContextProvider>
}