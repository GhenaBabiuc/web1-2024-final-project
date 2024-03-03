import React, {useEffect, useState} from 'react';
import './MovieListPage.css';
import axios from 'axios';
import ItemCardMovie from '../ItemCardMovie';
import SearchBar from '../SearchBar';
import Pagination from "../Pagination";

export default function MovieListPage() {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [totalMovies, setTotalMovies] = useState(0);
    const [currentMovie, setCurrentMovie] = useState(0);
    const [filmFilter, setFilmFilter] = useState({});
    const moviesPerPage = 102;

    const sortingOptions = [
        {value: {value: "rating", order: "desc"}, label: "Rating DESC"},
        {value: {value: "rating", order: "asc"}, label: "Rating ASC"},
        {value: {value: "releaseDate", order: "asc"}, label: "Release Date ASC"},
        {value: {value: "releaseDate", order: "desc"}, label: "Release Date DESC"},
    ];

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get('http://localhost:8080/genres/all', {});
                setGenres(response.data.map((genre) => ({value: genre.name, label: genre.name})));
            } catch (error) {
                console.error('There was an error fetching the genres', error);
            }
        };

        fetchGenres();
    }, []);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/films/all', {
                    params: {
                        title: filmFilter.title,
                        genres: filmFilter.genres.join(','),
                        valueOrder: filmFilter.sortingBy.value,
                        order: filmFilter.sortingBy.order,
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
    }, [filmFilter, currentMovie]);

    useEffect(() => {
        setCurrentMovie(0);
    }, [filmFilter]);

    return (
        <div className="movie-list-page-container">
            <SearchBar setFilmFilter={setFilmFilter}
                       genresOptions={genres}
                       sortingOptions={sortingOptions}/>
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