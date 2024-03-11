import React from 'react';
import './HomePage.css';
import background from '../../assets/images/movie-background.png';
import {Link} from "react-router-dom";
import FAQComponent from "../FAQComponent";

export default function HomePage() {
    return (
        <>
            <div className="home-page-image-background">
                <img src={background} alt="Movie background"/>
            </div>
            <div className="home-page-container">
                <div className="home-page-content">
                    <h1 className="home-page-title">The Best Streaming Experience</h1>
                    <p className="home-page-subtitle">
                        StreamVibe is the best streaming experience for watching your favorite movies and shows on
                        demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including
                        the latest blockbusters, classic movies, popular TV shows, and more.
                        You can also create your own watchlists, so you can easily find the content you want to watch.
                    </p>
                    <Link className="start-watching-link" to="/movies">Start Watching Now</Link>
                </div>
                <FAQComponent/>
            </div>
        </>
    );
}
