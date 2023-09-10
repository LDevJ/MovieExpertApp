import React from 'react'
import { ItemMovie } from './ItemMovie';
import { useFetchMovies } from '../hooks/useFetchMovies';

export const CardMovie = ({movie}) => {

    const {images, isLoading} = useFetchMovies(movie);

  return (
    <>
    <h2>{movie}</h2>
    {
      isLoading && ( <h3>Cargando ...</h3> )
    }
    <div className='card-grid'>{images.map( (img) => {
        return (
            <ItemMovie key={img.id} {...img}/>
           
        )
    }) }</div>
    </>
    
  )
}
