// src/components/MoviesList.jsx

import React, { useState } from 'react';

const MoviesList = () => {
    // Initialize state with a list of movies
    const movieList = ['Sacrifice', 'Nostalgia', 'Voyage in Time', 'Stalker']
    // Implement required functionalities here

    return (
        <div>
            {/* Toggle view button */}
            <ul>
                {movieList.map((title, index) => (
                    <li key={index}>{title}</li>
                ))}
            </ul>
        </div>
    );
};
export default MoviesList;