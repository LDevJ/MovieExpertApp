import React, { useState } from 'react'
import { AddMovie } from './components/AddMovie'
import { CardMovie } from './components/CardMovie'

export const MovieExpertApp = () => {

    const [movies, setMovies] = useState(['Avengers'])
  
    const onAddMovie = (newMovie) => {
        if(movies.includes(newMovie)) return;
        setMovies([newMovie, ...movies]);
    }
  return (
    <>
    {/* Titulo */}
    <h1>MovieExpertApp</h1>
    
    {/* Buscador */}
    <AddMovie onAddMovie={onAddMovie}/>


    {/* Listado de Movies */}
        {/* Movie */}
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
