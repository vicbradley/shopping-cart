import React, { useState } from "react";
import { createContext } from "react";
import fetchProducts from "../pages/products/fetchProducts";

export const ProductContext = createContext(null);

export const ProductContextProvider = (props) => {
    const [ cartItems, setCartItems ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ totalPrice, setTotalPrice ] = useState(0);

    const getProducts = async () => {
        const result = await fetchProducts();
        setProducts(result);
    };

    const addToCart = (id,price) => {

        const hasDuplicateId = cartItems.some(item => item.id === id);

        if (hasDuplicateId) {
            alert("The Product Is Already In The Cart");
            return;
        } 

        const newItem = {
            id: id,
            itemTotalPrice: price,
            amount: 1
        }

        setCartItems([...cartItems,newItem]);

    }

    
    

    const contextValue = {cartItems, setCartItems, addToCart, products, getProducts, totalPrice, setTotalPrice}

    return <ProductContext.Provider value={contextValue}>{props.children}</ProductContext.Provider>
}