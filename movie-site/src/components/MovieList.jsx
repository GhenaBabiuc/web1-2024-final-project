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
        <div className="container">
            <h1 className="title">Movies</h1>
            <ul className="list">
                {movies.map(movie => (
                    <li key={movie.id} className="listItem">
                        <Link to={`/movies/${movie.id}`} className="listLink">
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};