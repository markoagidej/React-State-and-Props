// src/components/MoviesList.jsx

import React, { useState } from 'react';

const MoviesList = () => {
    // Initialize state with a list of movies
    const [movieList, setMovies] = useState([
        {id: 1, title: 'Sacrifice', description: 'World War III has erupted, and the end of the world is near. In order to avert the apocalypse, Alexander makes a bargain with God', genre: 'drama'},
        {id: 2, title: 'Nostalgia', description: 'To investigate the life of Russian composer Pavel Sosnovsky, Andrei Gorchakov goes to Italy, where Sosnovsky resided before his suicide.', genre: 'drama'},
        {id: 3, title: 'Voyage in Time', description: 'Documents the travels in Italy of the director Andrei Tarkovsky with the script writer Tonino Guerra in preparation for the making of his film Nostalghia', genre: 'documentary'},
        {id: 4, title: 'Stalker', description: 'In an unnamed country at an unspecified time, there is a fiercely protected post-apocalyptic wasteland known as The Zone.', genre: 'science fiction'}
    ]);

    
    const removeMovie = (event) => {
        const id = event.currentTarget.getAttribute("data-value");
        let moviesCopy = movieList;
        let movieIndex = 0
        movieList.forEach((listMovie) => {
            if (listMovie.id == id) {
                movieIndex = movieList.indexOf(listMovie)
            }
        });
        moviesCopy.splice(movieIndex, 1);
        console.log(moviesCopy)
        setMovies(moviesCopy);
    }

    const [descVisible, setVisible] = useState(false);
                
    const showDesc = () => {
        setVisible(true);
    }

    const hideDesc = () => {
        setVisible(false);
    } 

    return (
        <div>
            <ul>
                {movieList.map((movie) => {
                    return (
                        <div>
                            {descVisible ? (
                                <div>
                                    <li onClick={hideDesc} key={movie.id}>{movie.title}<button data-value={movie.id} onClick={removeMovie}>Remove</button></li>
                                    <p>{movie.description}</p>
                                    <p>{movie.id}</p>
                                </div>
                            ) : (
                                <div>
                                    <li onClick={showDesc} key={movie.id}>{movie.title}<button data-value={movie.id} onClick={removeMovie}>Remove</button></li>
                                </div>
                            )}
                        </div>
                    )
                })}
            </ul>
        </div>
    );
};
export default MoviesList;