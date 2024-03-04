import React, {useEffect, useState} from "react";
import Select from "react-select";
import "./SearchBar.css";
import axios from "axios";

export default function SearchBar({setFilmFilter}) {
    const [genresOptions, setGenres] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedSorting, setSelectedSorting] = useState({
        value: {value: "rating", order: "desc"},
        label: "Rating DESC"
    });

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

    const sortingOptions = [
        {value: {value: "rating", order: "desc"}, label: "Rating DESC"},
        {value: {value: "rating", order: "asc"}, label: "Rating ASC"},
        {value: {value: "releaseDate", order: "asc"}, label: "Release Date ASC"},
        {value: {value: "releaseDate", order: "desc"}, label: "Release Date DESC"},
    ];

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setFilmFilter({
                title: searchTitle,
                genres: selectedGenres.map(genre => genre.value),
                sortingBy: selectedSorting.value
            });
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    }, [searchTitle, selectedGenres, selectedSorting]);

    return (
        <div className="search-bar-container">
            <input
                type="text"
                autoComplete="off"
                className="search-input"
                placeholder="Search movies by title"
                onChange={(event) => setSearchTitle(event.target.value)}
            />
            <div className="select-container">
                <Select
                    isMulti
                    options={genresOptions}
                    className="genres-select"
                    placeholder="Select genres"
                    onChange={setSelectedGenres}
                />
            </div>
            <div className="select-container">
                <Select
                    options={sortingOptions}
                    className="sorting-select"
                    placeholder="Sort by"
                    value={selectedSorting}
                    onChange={setSelectedSorting}
                />
            </div>
        </div>
    );
}