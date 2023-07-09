import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";

const Product = (props) => {
    const { image, title, price, id } = props.data;
    const { addToCart } = useContext(ProductContext);
    const truncatedTitle = title.length > 45 ? title.substring(0, 45) + "..." : title;

    return (
        <div className="product">
            <div className="img-container">
                <img className="image" src={image} />
            </div>
            <div className="product-desc">
                <p className="product-title">{truncatedTitle}</p>
                <p className="product-price">${price}</p>
                <button className="btn-addToCart" onClick={() => addToCart(id, price)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
