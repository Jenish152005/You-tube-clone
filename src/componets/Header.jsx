import React, { useState } from 'react';
import "../Css/style.css"
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">YouTube Clone</div>
            <div className="search-container">
   
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                ☰
            </div>
            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to= "HOME">Home</Link></li>
                    <li><Link to="TRENDING">Trending</Link></li>
                    <li><Link to="SUBSCRIPTION">Subscriptions</Link></li>
                    <li><Link to="LIBRARY">Library</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;