// src/components/MoviesList.jsx

import React, { useState } from 'react';

const MoviesList = () => {
    // Initialize state with a list of movies
    const [movieList, setMovies] = useState([
        {id: 1, title: 'Sacrifice', description: 'World War III has erupted, and the end of the world is near. In order to avert the apocalypse, Alexander makes a bargain with God', genre: 'drama', descVisible: false, genreHide: false},
        {id: 2, title: 'Nostalgia', description: 'To investigate the life of Russian composer Pavel Sosnovsky, Andrei Gorchakov goes to Italy, where Sosnovsky resided before his suicide.', genre: 'drama', descVisible: false, genreHide: false},
        {id: 3, title: 'Voyage in Time', description: 'Documents the travels in Italy of the director Andrei Tarkovsky with the script writer Tonino Guerra in preparation for the making of his film Nostalghia', genre: 'documentary', descVisible: false, genreHide: false},
        {id: 4, title: 'Stalker', description: 'In an unnamed country at an unspecified time, there is a fiercely protected post-apocalyptic wasteland known as The Zone.', genre: 'science fiction', descVisible: false, genreHide: false}
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

    const showDesc = (event) => {
        const index = event.currentTarget.getAttribute("data-value");
        movieList[index].descVisible = true
        setMovies(movieList)
    }

    const hideDesc = (event) => {
        const index = event.currentTarget.getAttribute("data-value");
        movieList[index].descVisible = false
        setMovies(movieList)
    } 

    const [dramaOnly, setDramaOnly] = useState(false)
    const toggleDramas = () => {
        let newState = dramaOnly ? false : true
        setDramaOnly(newState)
        // movieList.map((movie) => {
        //     console.log(movie)
        //     (movie.genre != "drama") ? (movie.genreHide = dramaOnly) : (movie.genreHide = !dramaOnly)
        // })
        // console.log(movieList)
        // setMovies(movieList)
    }
// 
    if (dramaOnly) {
        return (
            <div>
                <button onClick={toggleDramas}>Toggle Dramas</button>
                <ul>
                    {movieList.map((movie, index) => {
                        if (movie.genre == "drama") {
                            return (
                                <div>
                                    {movie.descVisible ? (
                                        <div>
                                            <li onClick={hideDesc} data-value={index} key={movie.id}>{movie.title}</li>
                                            <p>{movie.description}</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <li onClick={showDesc} data-value={index} key={movie.id}>{movie.title}</li>
                                        </div>
                                    )}
                                </div>
                            )
                        } else {
                            return (<div></div>)
                        }
                    })}
                    {movieList.map((movie) => {
                        return (
                            <button data-value={movie.id} onClick={removeMovie}>Remove {movie.title}</button>
                        )
                    })}
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={toggleDramas}>Toggle Dramas</button>
                <ul>
                    {movieList.map((movie, index) => {                                 
                        return (
                            <div>
                                {movie.descVisible ? (
                                    <div>
                                        <li onClick={hideDesc} data-value={index} key={movie.id}>{movie.title}</li>
                                        <p>{movie.description}</p>
                                    </div>
                                ) : (
                                    <div>
                                        <li onClick={showDesc} data-value={index} key={movie.id}>{movie.title}</li>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                    {movieList.map((movie) => {
                        return (
                            <button data-value={movie.id} onClick={removeMovie}>Remove {movie.title}</button>
                        )
                    })}
                </ul>
            </div>
        );
    }
};
export default MoviesList;