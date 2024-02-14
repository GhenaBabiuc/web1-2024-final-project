import React from 'react';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="home-page">
            <h1>Welcome to Our Movie Library!</h1>
            <p>Explore a wide collection of movies and find your favorites.</p>
            <a href="/movies" className="explore-btn">Explore Movies</a>
        </div>
    );
};
