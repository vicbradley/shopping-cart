import React, { useEffect, useContext } from "react";
import Product from "./product";
import { ProductContext } from "../../context/product-context";
import "./products.css";

const Products = () => {
    const { products, getProducts } = useContext(ProductContext);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="products-container">
            {products.map((product) => (
                <Product data={product} />
            ))}
        </div>
    );
};

export default Products;
