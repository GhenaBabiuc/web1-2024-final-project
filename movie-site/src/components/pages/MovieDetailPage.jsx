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
                    <p className="detail-director">Directed by {movie.director}</p>
                    <p className="detail-rating">Rating: {movie.rating}</p>
                    <div className="detail-genres">
                        <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
                    </div>
                </div>
            </div>
            <div className="detail-body">
                <p className="detail-description">{movie.description}</p>
                <div className="detail-actors">
                    <strong>Actors:</strong>
                    <ul>
                        {movie.actors.map((actor) => (
                            <li key={actor.id}>{actor.fullName}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}