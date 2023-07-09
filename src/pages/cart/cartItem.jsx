import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/product-context";
import "./cart.css";

const CartItem = (props) => {
    const { image, title, price } = props.productData;
    const fixPrice = price;

    const { id, itemTotalPrice, amount } = props.cartItemData;

    const { cartItems, setCartItems,setTotalPrice } = useContext(ProductContext);

    const addAmount = () => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    amount: item.amount + 1,
                    itemTotalPrice: fixPrice * (item.amount + 1),
                };
            }
            return item;
        });

        setCartItems(updatedCartItems);
    };

    const reduceAmount = () => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === id) {
                const newAmount = item.amount - 1;
                if (newAmount === 0) {
                    setTotalPrice(0)
                    return null; // Skip this item
                }
                return {
                    ...item,
                    amount: newAmount,
                    itemTotalPrice: fixPrice * newAmount
                };
            }
            return item;
        });
    
        const filteredCartItems = updatedCartItems.filter((item) => item !== null);
        setCartItems(filteredCartItems);
    };
    
    

    useEffect(() => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.itemTotalPrice;
        });
        setTotalPrice(total.toFixed(3));
    }, [cartItems]);

    return (
        <>
            <div className="cart-item">
                <div className="cart-item-image-container">
                    <img className="cart-item-image" src={image} />
                </div>
                <div className="cart-item-desc">
                    <div className="cart-item-header">
                        <p className="cart-item-title">{title}</p>
                        <p className="cart-item-price">$ {itemTotalPrice}</p>
                    </div>
                    <div className="cart-item-button">
                        <button onClick={reduceAmount}>-</button>
                        <p>{amount}</p>
                        <button onClick={addAmount}>+</button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;
