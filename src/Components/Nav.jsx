import react from "react";
import '../assets/CSS/Nav.css'
import cartPic from '../images/cart.jpg'

const Nav = () => {
    return(
        <div className="nav">
            <div className="logo">Pompeo</div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="line"></div>
            <div className="cart">
                <img className="cartPic" src={cartPic} alt="" />
                <p>Cart</p>
            </div>
        </div>
    )
}

export default Nav;