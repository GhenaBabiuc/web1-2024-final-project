import React, {useEffect, useState} from 'react';
import './MoviePage.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import MovieDetailedInfo from "../MovieDetailedInfo";
import ItemCardMovie from "../ItemCardMovie";

export default function MoviePage() {
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

    return (
        <div className="movie-page-container">
            {!movie ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                    {MovieDetailedInfo(movie)}
                    <div className="trailer-container">
                        <iframe
                            src={`${movie.trailerEmbedLink}?rel=0`}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="Trailer"
                        />
                    </div>
                </>
            )}
        </div>
    );
}