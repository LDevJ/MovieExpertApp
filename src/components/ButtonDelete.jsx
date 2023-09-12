import React from 'react'

export const ButtonDelete = ({movies, onDeletMovie, text, clase}) => {

    if(movies.length > 0){
        return ( 
                <button className={clase} onClick={onDeletMovie}> {text}</button>
        )
    }
  return (
    <></>
  )
}
