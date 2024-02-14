import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navLink">Home</Link>
            <Link to="/movies" className="navLink">Movies</Link>
        </nav>
    );
};
