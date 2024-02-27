import React, {useEffect, useState} from 'react';
import './MovieListPage.css';
import axios from 'axios';
import ItemCardMovie from "../ItemCardMovie";
import SearchBar from "../SearchBar";

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
                setMovies(response.data.data);
            } catch (error) {
                console.error('There was an error fetching the movies', error);
            }
        };

        fetchMovies();
    }, [filmSearch]);

    const handleInputChange = (event) => {
        setFilmSearch(event.target.value);
    }

    return (
        <div className="movie-list-page-container">
            {SearchBar(handleInputChange)}
            {movies.length === 0 ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movie-list">
                    {movies.map(movie => ItemCardMovie(movie))}
                </div>
            )}
        </div>
    );
}