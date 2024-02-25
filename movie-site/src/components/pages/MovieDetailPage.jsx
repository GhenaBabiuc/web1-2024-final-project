import React, {useEffect, useState} from 'react';
import './MovieDetailPage.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function MovieDetailPage() {
    const [movie, setMovie] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/films/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error('There was an error fetching the movie details', error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) return <div className="loading">Loading...</div>;

    return (
        <div className="detail-container">
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
                </div>
            </div>
            <div className="detail-body">
                <p className="detail-description">{movie.description}</p>
            </div>
            <iframe
                src={movie.trailerEmbedLink}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Trailer"
                className="detail-trailer-iframe"
            />
        </div>
    );
}