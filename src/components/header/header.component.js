import React from "react";

import {auth} from "../../firebase/firebase.utils";
 
import {Link} from "react-router-dom";

import "./header.styles.scss";

import {ReactComponent as Logo} from "../../assets/crown.svg";


const Header = ({currentUser}) => (
    <header className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>
            {currentUser ?   
               <div className="option" onClick={() =>auth.signOut()}>sign out </div> : <Link className="option" to="/signin">sign in</Link>}
        </div>
    </header>
)

export default Header;