
export const getMovies = async(movie) => {
    const URL = `https://omdbapi.com/?apikey=689e4f8b&s=${movie}`

    const resp = await fetch(URL);
    const data = await resp.json();

    if(data.Search && Array.isArray(data.Search)){
        const movies = data.Search.map( (info) => {
            return ({
                id: info.imdbID,
                title: info.Title,
                url: info.Poster
            })
        })  
    return movies;

    } else {
        return [];
    }

}