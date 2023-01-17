import "../CSS/Header.css"

import { Link } from "react-router-dom"
const Header = ()=>{

    return(
        <>
        <div className="Header">
            <a href="/"><img src="https://i.pinimg.com/736x/77/b8/af/77b8af839817a7a106b7726cfc7daeed.jpg" alt=" logo"  /></a>
            <h1>FreshEats</h1>
            <p>
            <Link to='/login'>Login/Signup</Link>
            <a href="/">Offers</a><a href="/">Home</a>
            <Link to="/cart"><i className="fa-solid fa-cart-shopping fa-large"></i></Link>
            </p>
        </div>
       
        </>
    )
}
export default Header