import React, { useState } from 'react'
import { AddMovie, CardMovie } from './components'
import { ButtonDelete } from './components/ButtonDelete'

export const MovieExpertApp = () => {

    const [movies, setMovies] = useState([])
  
    const onAddMovie = (newMovie) => {
        if(movies.includes(newMovie)) return;
        setMovies([newMovie, ...movies]);
    }

    const onDeleteMovie = () =>{
        if(movies.length === 0) return;
        const newMovies = movies.slice(1, movies.length);
        setMovies(newMovies);
    }

    const onDeleteMoviesAll = () => {
        if(movies.length === 0) return;
        setMovies([]);
    }

    let condition = movies.length > 0
    let buttonDelete = 'Borrar última busqueda';
    let buttonDeleteAll = 'Borrar todo' ;

  return (
    <>
    <h1>MovieExpertApp</h1>
    
    <AddMovie onAddMovie={onAddMovie}/>

    <div className='container-btn'>
        <ButtonDelete onDeletMovie={onDeleteMovie} text={buttonDelete}  movies={movies} clase='btn-delete'/>
        <ButtonDelete onDeletMovie={onDeleteMoviesAll} text={buttonDeleteAll} movies={movies} clase='btn-deleteAll'/>
    </div>


    {condition ? (
                <div>
                    {movies.map((movie) => {
                        return (
                            <CardMovie key={movie} movie={movie} />
                        )
                    })}
                </div>
            ) : (
                <div className='no-movie'>No se ha realizado ninguna busqueda...</div>
            )}
    </>
  )
}
