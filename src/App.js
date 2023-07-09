import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Cart from "./pages/cart/cart";
import Navbar from "./components/navbar";
import { ProductContextProvider } from "./context/product-context";
import "./App.css";

const App = () => {
    return (
        <div>
            <ProductContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/shopping-cart" element={<Home />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/Cart" element={<Cart />} />
                    </Routes>
                </Router>
            </ProductContextProvider>
        </div>
    );
};

export default App;
