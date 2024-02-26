import React from "react";
import "./SearchBar.css";

export default function SearchBar(handleInputChange) {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search movies for title"
                onInput={(event) => handleInputChange(event)}
            />
        </div>
    );
}