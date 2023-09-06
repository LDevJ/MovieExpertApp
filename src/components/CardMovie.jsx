import React, { useEffect, useState } from 'react'
import { getMovies } from '../helpers/getMovies';
import { ItemMovie } from './ItemMovie';
import { useFetchMovies } from '../hooks/useFetchMovies';

export const CardMovie = ({movie}) => {

    const {images, isLoading} = useFetchMovies(movie);

    console.log({images, isLoading});

  return (
    <>
    <h2>{movie}</h2>
    <div className='card-grid'>{images.map( (img) => {
        return (
            <ItemMovie key={img.id} {...img}/>
           
        )
    }) }</div>
    </>
    
  )
}
