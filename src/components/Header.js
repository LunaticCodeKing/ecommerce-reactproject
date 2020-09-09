import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import "../styling/Header.css";

function Header() {

    const [{ basket },dispatch] = useStateValue();

    return (
        <div className = "header">
            <Link to="/">
                <div className = "header__logo"><h1>EBUY</h1></div>
            </Link>
            <div className = "header__search">
                <input className="header__searchInput" type="text" />  
                <SearchIcon className = "header__searchIcon" />              
            </div>
            
            <div className = "header__nav">
                <div className = "header__option">
                    <span className = "header__optionlineone">Hello Guest</span> 
                    <span className = "header__optionlinetwo">sign in</span> 
                </div>
                <div className = "header__option">
                    <span className = "header__optionlineone">Returns</span> 
                    <span className = "header__optionlinetwo">& Orders</span> 
                </div>
                <div className = "header__option">
                    <span className = "header__optionlineone">Your</span> 
                    <span className = "header__optionlinetwo">Prime</span> 
                </div>
                <Link to="/checkout">
                    <div className = "header__optionbasket">
                        <ShoppingBasketIcon /> 
                        <span className = "header__optionlinetwo header__basketcount">{basket?.length}</span>
                    </div> 
                </Link>
            </div>
        </div>
    );
}

export default Header
