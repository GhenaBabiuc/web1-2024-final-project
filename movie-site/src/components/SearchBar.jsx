import React, {useEffect, useState} from "react";
import "./SearchBar.css";

export default function SearchBar({handleInputChange}) {
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleInputChange(searchTerm);
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm]);

    return (
        <div className="search-bar-container">
            <input
                type="text"
                autoComplete='off'
                className="search-input"
                placeholder="Search movies for title"
                onChange={(event) => setSearchTerm(event.target.value)}
            />
        </div>
    );
}