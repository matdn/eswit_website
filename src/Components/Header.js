import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoBlack from '../Assets/Images/LogoBlack.png';
import LogoWhite from '../Assets/Images/LogoWhite.png';

const Header = () => {
    const location = useLocation();
    console.log("Pathname:", location.pathname); 
    const isHomePage = location.pathname === '/';

    return (
        <div className={`Header_Nav ${isHomePage ? 'home-page-class' : ''}`}>
            <NavLink exact to="/" activeClassName="active-link">
                <img 
                    className='logo' 
                    src={isHomePage ? LogoWhite : LogoBlack} 
                    alt="Logo" 
                />
            </NavLink>
            <nav>
                <NavLink exact to="/" activeClassName="active-link"><h3>Home</h3></NavLink>
                <NavLink to="/products" activeClassName="active-link"><h3>Products</h3></NavLink>
                <NavLink to="/solutions" activeClassName="active-link"><h3>Solutions</h3></NavLink>
                <NavLink to="/pricing" activeClassName="active-link"><h3>Pricing</h3></NavLink>
            </nav>
        </div>
    );
};

export default Header;
