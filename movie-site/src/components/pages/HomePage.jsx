import React from 'react';
import './HomePage.css';
import videoSrc from 'C:/Users/ghena/Downloads/The Shawshank Redemption.mp4';

export default function HomePage() {
    return (
        <>
            <div className="video-background">
                <video autoPlay muted loop>
                    <source src={videoSrc} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="home-page">
                <div className="content">
                    <h1>Welcome to Our Movie Library!</h1>
                    <p>Explore a wide collection of movies and find your favorites.</p>
                    <a href="/movies" className="explore-btn">Explore Movies</a>
                </div>
            </div>
        </>
    );
}
