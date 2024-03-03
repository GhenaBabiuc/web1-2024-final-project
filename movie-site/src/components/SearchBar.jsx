import React, {useEffect, useState} from "react";
import Select from "react-select";
import "./SearchBar.css";

export default function SearchBar({genresOptions, sortingOptions, setFilmFilter}) {
    const [searchTitle, setSearchTitle] = useState("");
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedSorting, setSelectedSorting] = useState(sortingOptions[0]);

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