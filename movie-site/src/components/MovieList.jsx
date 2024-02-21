import React, {useEffect, useState} from 'react';
import './MovieList.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/films/all');
                setMovies(response.data);
            } catch (error) {
                console.error('There was an error fetching the movies', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-container">
            <div className="movie-list">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-item">
                        <Link to={`/movies/${movie.id}`} className="movie-link">
                            <img src={movie.coverUrl} alt={movie.title} className="movie-cover"/>
                            <div className="movie-info">
                                <h2>{movie.title}</h2>
                                <p>{new Date(movie.releaseDate).getFullYear()}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}