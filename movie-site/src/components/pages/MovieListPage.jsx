import React, {useEffect, useState} from 'react';
import './MovieListPage.css';
import axios from 'axios';
import MovieItem from "../MovieItem";

export default function MovieListPage() {
    const [movies, setMovies] = useState([]);
    const [filmSearch, setFilmSearch] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/films/all', {
                    params: {
                        title: filmSearch
                    }
                });
                setMovies(response.data);
            } catch (error) {
                console.error('There was an error fetching the movies', error);
            }
        };

        fetchMovies();
    }, [filmSearch]);

    const handleInputChange = (event) => {
        setFilmSearch(event.target.value);
    }

    if (!movies) return <div className="loading">Loading...</div>;

    return (
        <div className="movie-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search movies for title"
                onInput={(event) => handleInputChange(event)}
            />

            <div className="movie-list">
                {movies.map(movie => MovieItem(movie))}
            </div>
        </div>
    );
}