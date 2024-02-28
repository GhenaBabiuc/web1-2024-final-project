import React from "react";
import "./Pagination.css";

export default function Pagination({totalMovies, moviesPerPage, currentMovie, setCurrentMovie}) {
    const handlePreviousClick = () => {
        setCurrentMovie(currentMovie - moviesPerPage);
        window.scrollTo(0, 0);
    };

    const handleNextClick = () => {
        setCurrentMovie(currentMovie + moviesPerPage);
        window.scrollTo(0, 0);
    };

    const currentPage = currentMovie / moviesPerPage + 1;
    const maxPages = Math.ceil(totalMovies / moviesPerPage);

    return (
        <div className="pagination">
            <button onClick={handlePreviousClick} disabled={currentMovie === 0}>
                Previous
            </button>
            <span>
                    Page {currentPage} of {maxPages}
                </span>
            <button onClick={handleNextClick}
                    disabled={currentPage === maxPages}>
                Next
            </button>
        </div>
    );
}