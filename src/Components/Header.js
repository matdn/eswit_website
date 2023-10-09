import React from 'react';
import { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import LogoBlack from '../Assets/Images/LogoBlack.png';
import LogoWhite from '../Assets/Images/LogoWhite.png';

const Header = () => {
    const location = useLocation();
    console.log("Pathname:", location.pathname); 
    const isHomePage = location.pathname === '/';
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    const toggleBurgerMenu = () => {
        setShowBurgerMenu(!showBurgerMenu);
    };
    return (
        <div className={`Header_Nav ${isHomePage ? 'home-page-class' : ''}`}>
            <NavLink exact to="/" activeClassName="active-link">
                <img 
                    className='logo' 
                    src={isHomePage ? LogoWhite : LogoBlack} 
                    alt="Logo" 
                />
            </NavLink>
            <nav className='fullScreenNav'>
                    <NavLink exact to="/" activeClassName="active-link"><h3>Home</h3></NavLink>
                    <NavLink to="/products" activeClassName="active-link"><h3>Products</h3></NavLink>
                    <NavLink to="/pricing" activeClassName="active-link"><h3>Pricing</h3></NavLink>
                    <NavLink to="/contact" activeClassName="active-link"><h3>Contact</h3></NavLink>
            </nav>    
            <nav className={showBurgerMenu ? 'burger-menu' : 'burger-menu'}>
                <div className={`burger-button ${isHomePage ? 'home-page-burger' : ''}`} onClick={toggleBurgerMenu}>
                    <div className={`bar ${showBurgerMenu ? 'open' : ''}`}></div>
                    <div className={`bar ${showBurgerMenu ? 'open' : ''}`}></div>
                    <div className={`bar ${showBurgerMenu ? 'open' : ''}`}></div>
                </div>
                <div className={showBurgerMenu ? 'burger-content-visible' : 'burger-content-hidden'}>
                    <NavLink exact to="/" activeClassName="active-link"><h3>Home</h3></NavLink>
                    <NavLink to="/products" activeClassName="active-link"><h3>Products</h3></NavLink>
                    <NavLink to="/pricing" activeClassName="active-link"><h3>Pricing</h3></NavLink>
                    <NavLink to="/contact" activeClassName="active-link"><h3>Contact</h3></NavLink>
                </div>    
            </nav>
        </div>
    );
};

export default Header;
