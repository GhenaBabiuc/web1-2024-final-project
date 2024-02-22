import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import MovieListPage from './components/pages/MovieListPage';
import MovieDetailPage from './components/pages/MovieDetailPage';

export default function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/movies" element={<MovieListPage/>}/>
                <Route path="/movies/:id" element={<MovieDetailPage/>}/>
            </Routes>
        </Router>
    );
};