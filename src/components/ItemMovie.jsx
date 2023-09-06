import React from 'react'

export const ItemMovie = (img) => {
  return (
    <div className='card'>
        <p>{img.title}</p>
        <img className='img' src={img.url} alt={img.title} />
    </div>
  )
}
