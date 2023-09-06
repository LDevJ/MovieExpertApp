import { useEffect, useState } from "react";
import { getMovies } from "../helpers/getMovies";

export const useFetchMovies = ( movie ) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getMovies(movie);
        setImages(newImages);
        setisLoading(false)
    }

    useEffect(() => {
        getImages();
      }, [])
  
  return {
    images,
    isLoading
  }
}
