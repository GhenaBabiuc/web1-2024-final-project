import React, {useEffect, useState} from 'react';
import './MovieListPage.css';
import axios from 'axios';
import ItemCardMovie from '../ItemCardMovie';
import SearchBar from '../SearchBar';
import Pagination from "../Pagination";

export default function MovieListPage() {
    const [movies, setMovies] = useState([]);
    const [filmSearch, setFilmSearch] = useState('');
    const [totalMovies, setTotalMovies] = useState(0);
    const [currentMovie, setCurrentMovie] = useState(0);
    const moviesPerPage = 102;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/films/all', {
                    params: {
                        title: filmSearch,
                        start: currentMovie,
                        limit: moviesPerPage
                    }
                });
                setMovies(response.data.data);
                setTotalMovies(response.data.total);
            } catch (error) {
                console.error('There was an error fetching the movies', error);
            }
        };

        fetchMovies();
    }, [filmSearch, currentMovie]);

    useEffect(() => {
        setCurrentMovie(0);
    }, [filmSearch]);

    const handleInputChange = (value) => {
        setFilmSearch(value);
    };

    return (
        <div className="movie-list-page-container">
            <SearchBar handleInputChange={handleInputChange} />
            {movies.length === 0 ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                    <div className="movie-list">
                        {movies.map(movie => ItemCardMovie(movie))}
                    </div>
                    <Pagination
                        totalMovies={totalMovies}
                        moviesPerPage={moviesPerPage}
                        currentMovie={currentMovie}
                        setCurrentMovie={setCurrentMovie}
                    />
                </>
            )}
        </div>
    );
}