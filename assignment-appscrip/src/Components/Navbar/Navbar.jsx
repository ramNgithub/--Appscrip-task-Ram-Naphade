import React from 'react';
import './Navbar.css'; 
import search from "../Assets/search.png";
import favorite from "../Assets/heart.png";
import bag from "../Assets/bag.png";
import person from "../Assets/person.png";
import logo from "../Assets/appscrip-logo.png"
function Navbar() {
    return (
        <nav >
            <div className="navbar">
           
            <div className="navbar-brand">
                <img src={logo} alt="Logo" className="logo" />
                
            </div>

            <span className="website-name">APPSCRIPT STORE</span>

            <div className="navbar-menu">
                <div className="navbar-menu-item">
                    <img src={search} alt="Search" className="icon" />
                </div>
                <div className="navbar-menu-item">
                    <img src={favorite} alt="Favorite" className="icon" />
                </div>
                <div className="navbar-menu-item">
                    <img src={bag} alt="Cart" className="icon" />
                </div>
                <div className="navbar-menu-item">
                    <img src={person} alt="User" className="icon" />
                </div>
                <div className="navbar-menu-item">
                  
                    <select className="language-select">
                        <option value="English">ENG</option>
                        <option value="French">FRN</option>
                        <option value="ARABIK">ARB</option>
                    </select>
                </div>
            </div>
            </div>
            <div className="bottom-links">
                <a href="#">SHOP</a>
                <a href="#">SKILLS</a>
                <a href="#">STORIES</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT US</a>
            </div>
        </nav>
    );
}

export default Navbar;




