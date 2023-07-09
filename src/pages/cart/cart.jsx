import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";
import CartItem from "./cartItem";

const Cart = () => {
    const { products, cartItems, totalPrice } = useContext(ProductContext);

    const filterProducts = products.filter((product) => {
        return cartItems.some((item) => item.id == product.id);
    });

    return (
        <>
            <div className="cart-container">
                {filterProducts.map((product) => {
                    const matchingCartItem = cartItems.find((item) => item.id === product.id);

                    return <CartItem productData={product} cartItemData={matchingCartItem} />;
                })}
            </div>

            <h3 className="total-price">Total Price : $ {totalPrice}</h3>
        </>
    );
};

export default Cart;
