// src/components/MoviesList.jsx

import React, { useState } from 'react';

// const [movieList, setMovies] = useState([
//     {id: 1, title: 'Sacrifice', description: 'World War III has erupted, and the end of the world is near. In order to avert the apocalypse, Alexander makes a bargain with God', genre: 'drama', hidden: true},
//     {id: 2, title: 'Nostalgia', description: 'To investigate the life of Russian composer Pavel Sosnovsky, Andrei Gorchakov goes to Italy, where Sosnovsky resided before his suicide.', genre: 'drama', hidden: true},
//     {id: 3, title: 'Voyage in Time', description: 'Documents the travels in Italy of the director Andrei Tarkovsky with the script writer Tonino Guerra in preparation for the making of his film Nostalghia', genre: 'documentary', hidden: true},
//     {id: 4, title: 'Stalker', description: 'In an unnamed country at an unspecified time, there is a fiercely protected post-apocalyptic wasteland known as The Zone.', genre: 'science fiction', hidden: true}
// ]);

// const Movies = ({movieList}) => {
//     return (
//         <div>
//             <ul>
//             {movieList.map((movie, index) => {
//                 <li key={index}>{movie.title}</li>
//             })}
//             </ul>
//         </div>
//     )
// };

const MoviesList = () => {
    // Initialize state with a list of movies

    const [movieList, setMovies] = useState([
        {id: 1, title: 'Sacrifice', description: 'World War III has erupted, and the end of the world is near. In order to avert the apocalypse, Alexander makes a bargain with God', genre: 'drama', hidden: true},
        {id: 2, title: 'Nostalgia', description: 'To investigate the life of Russian composer Pavel Sosnovsky, Andrei Gorchakov goes to Italy, where Sosnovsky resided before his suicide.', genre: 'drama', hidden: true},
        {id: 3, title: 'Voyage in Time', description: 'Documents the travels in Italy of the director Andrei Tarkovsky with the script writer Tonino Guerra in preparation for the making of his film Nostalghia', genre: 'documentary', hidden: true},
        {id: 4, title: 'Stalker', description: 'In an unnamed country at an unspecified time, there is a fiercely protected post-apocalyptic wasteland known as The Zone.', genre: 'science fiction', hidden: true}
    ]);
    
    const removeMovie = (event) => {
        console.log("Remove Start")
        const id = event.currentTarget.getAttribute("data-value");
        let moviesCopy = movieList;
        let movieIndex = 0
        movieList.forEach((listMovie) => {
            if (listMovie.id == id) {
                movieIndex = movieList.indexOf(listMovie)
            }
        });
        moviesCopy.splice(movieIndex, 1);
        setMovies(moviesCopy);
        console.log("Remove End")
    }    

    // const toggleDescription = (event) => {

    //     const [descVisible, setVisible] = useState(false);
                    
    //     const showDesc = () => {
    //         setVisible(true);
    //     }
    
    //     const hideDesc = () => {
    //         setVisible(false);
    //     } 

    //     const id = event.currentTarget.getAttribute("data-value");
    //     movieList.forEach((listMovie) => {
    //         if (listMovie.id == id) {
    //             if (listMovie.hidden) {
    //                 listMovie.hidden = false
    //             } else {
    //                 listMovie.hidden = true
    //             }
    //         }
    //     });
    // }

    return (
        <div>
            <ul>
                {movieList.map((movie) => {
                    console.log(movie.id)
                    console.log("Movie Before State")
                    const [descVisible, setVisible] = useState(false);
                    console.log("Movie After State")
                                
                    const showDesc = () => {
                        console.log("Movie before show")
                        setVisible(true);
                        console.log("Movie after show")
                    }
                
                    const hideDesc = () => {
                        console.log("Movie before hide")
                        setVisible(false);
                        console.log("Movie after hide")
                    } 
                        
                    return (                        
                        <div>
                            {descVisible ? (
                                <div>
                                    <li onClick={hideDesc} key={movie.id}>{movie.title}</li>
                                    <p>{movie.description}</p>
                                    <button data-value={movie.id} onClick={removeMovie}>Remove</button>
                                </div>
                            ) : (
                                <div>
                                    <li onClick={showDesc} key={movie.id}>{movie.title}</li>
                                    <button data-value={movie.id} onClick={removeMovie}>Remove</button>
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