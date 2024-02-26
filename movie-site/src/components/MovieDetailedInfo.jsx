import React from "react";
import './MovieDetailedInfo.css';

export default function MovieDetailedInfo(movie) {
    return (
        <>
            <div className="detail-header">
                <img src={movie.coverUrl} alt={movie.title} className="detail-cover"/>
                <div className="detail-header-info">
                    <h2 className="detail-title">{movie.title}</h2>
                    <p className="detail-release-year">Release Year: {new Date(movie.releaseDate).getFullYear()}</p>
                    <div className="detail-directors">
                        <strong>Directors:</strong>
                        {movie.directors.map((director) => (
                            <span key={director.id}> {director.name}</span>
                        ))}
                    </div>
                    <p className="detail-rating">Rating: {movie.rating}</p>
                    <div className="detail-genres">
                        <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
                    </div>
                    <div className="detail-actors">
                        <strong>Actors:</strong>
                        <ul>
                            {movie.actors.map((actor) => (
                                <li key={actor.id}>{actor.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="detail-writers">
                        <strong>Writers:</strong>
                        {movie.writers.map((writer) => (
                            <span key={writer.id}> {writer.name}</span>
                        ))}
                    </div>
                    <div className="detail-description">
                        <strong>Description:</strong> {movie.description}
                    </div>
                </div>
            </div>

        </>
    );
}