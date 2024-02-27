import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../assets/Logo.png';
import searchIcon from '../assets/search-icon.png';
import notificationIcon from '../assets/notification-icon.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img src={logo} alt="StreamVibe Logo"/>
            </Link>
            <div className="nav-items">
                <Link to="/" className="navLink">Home</Link>
                <Link to="/movies" className="navLink">Movies & Shows</Link>
                <Link to="/support" className="navLink">Support</Link>
            </div>
            <div className="nav-actions">
                <button className="nav-icon-button">
                    <img src={searchIcon} alt="Search"/>
                </button>
                <button className="nav-icon-button">
                    <img src={notificationIcon} alt="Notifications"/>
                </button>
            </div>
        </nav>
    );
};
