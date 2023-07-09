
import home from "../../img/wallpaper.jpg";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {


    return (
        <div className="home-container">
            

            <div className="home-desc">
                <p className="home-slogan1">Best Online Store Of The Year</p>
                <p className="home-slogan2">We Have Anything You Need</p>
                <Link className="button-27" role="button" to="/products">
                    Shop Now
                </Link>
            </div>
            <Link className="button-27 only-mobile" role="button" to="/products">
                Shop Now
            </Link>

            <div className="home-image-container">
                <img className="home-image" src={home} alt="" />
            </div>

            <div className="home-footer only-mobile">
                <p className="footer-text">Copyright © 2023 Vic Bradley</p>
            </div>
        </div>
    );
};

export default Home;
