import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search-icon.png';
import notificationIcon from '../../assets/images/notification-icon.png';
import defaultProfileIcon from '../../assets/images/profile-user-account-icon.png';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img src={logo} alt="StreamVibe Logo"/>
            </Link>
            <div className="nav-items">
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
                <button className="nav-icon-button">
                    <img src={defaultProfileIcon} alt="Profile"/>
                </button>
            </div>
        </nav>
    );
};
