import {Link} from "react-router-dom";
import React from "react";
import './ItemCardMovie.css';

export default function ItemCardMovie(movie) {
    const defaultCoverUrl = "https://klike.net/uploads/posts/2022-09/1663762765_j-25.jpg";

    return (
        <div key={movie.id} className="movie-item">
            <Link to={`/movies/${movie.id}`} className="movie-link">
                <img src={movie.coverUrl || defaultCoverUrl} alt={movie.title} className="movie-cover"/>
                <div className="movie-info">
                    <h2>{movie.title}</h2>
                    <p>{new Date(movie.releaseDate).getFullYear()}</p>
                </div>
            </Link>
        </div>
    );
}