import React, { useState } from 'react'
import { AddMovie, CardMovie } from './components'

export const MovieExpertApp = () => {

    const [movies, setMovies] = useState([''])
  
    const onAddMovie = (newMovie) => {
        if(movies.includes(newMovie)) return;
        setMovies([newMovie, ...movies]);
    }
  return (
    <>
    <h1>MovieExpertApp</h1>
    
    <AddMovie onAddMovie={onAddMovie}/>

    <div>
        {movies.map( (movie) => {
            return (
                <CardMovie key={movie} movie={movie}/>
            )
        })}
    </div>
    </>
  )
}
