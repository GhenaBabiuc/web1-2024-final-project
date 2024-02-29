import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import MovieListPage from "./components/pages/MovieListPage";
import MoviePage from "./components/pages/MoviePage";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/movies" element={<MovieListPage/>}/>
                <Route path="/movies/:id" element={<MoviePage/>}/>
                <Route path="*" element={<HomePage/>}/>
            </Routes>
            <Footer/>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
