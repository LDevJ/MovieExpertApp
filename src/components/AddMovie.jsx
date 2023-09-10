import React, { useState } from 'react'

export const AddMovie = ({onAddMovie}) => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onAddMovie(inputValue);
        setInputValue('');
    }

  return (
    <>
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder='Avengers ...'
        value={inputValue}
        onChange={onChangeInput} 
        />
    </form>
    
    </>
  )
}
