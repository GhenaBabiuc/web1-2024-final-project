import React, {useEffect, useState} from 'react';
import './MovieDetail.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function MovieDetail() {
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

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="detail">
            <h1>{movie.title}</h1>
            <h1>{movie.releaseDate}</h1>
            <h1>{movie.director}</h1>
            <h1>{movie.rating}</h1>
            <h1>{movie.description}</h1>
            <h1>{movie.genre}</h1>
        </div>
    );
};
