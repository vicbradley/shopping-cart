import { Outlet, Link } from "react-router-dom";
import CartLogo from "./cart-logo";
import React, { useContext } from "react";
import { ProductContext } from "../context/product-context";


const Navbar = () => {

    const { cartItems } = useContext(ProductContext);

    return (
        <div className="navbar-container">
            <h1 className="navbar-title">Fake Store</h1>
            <nav>
                <ul>
                    <li >
                        <Link className="link" to="/shopping-cart">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/products">Products</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Cart">
                            <div className="cart-logo-border">
                                <CartLogo className="cart-logo"/>
                                <div className="cart-length">{cartItems.length}</div>
                            </div>
                        </Link>
                        {/* <Link className="link" to="/Cart">Cart</Link> */}
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
};

export default Navbar;
