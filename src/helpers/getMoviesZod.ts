import { movieSchema } from "../types/movieSchema";
import { movies } from "../data/movies";

export let zodMovies = movies.map( movie => {
    return movieSchema.parse(movie);
})



export function getMoviesByGenre(flag = "all")
{
    switch(flag)
    {
        case "all":
            return zodMovies;
        case flag:
            return zodMovies.filter(movie => movie.genre === flag);
        default:
            break;
    }
}

export function getMoviesById(id : any)
{
    return zodMovies.filter(movie => movie.id == id)[0];
}

export function searchMovieByParam(queryParam : any)
{
    let param = queryParam.toLowerCase();
    let result = zodMovies.filter( movie => 
        movie.title.toLowerCase().includes(param));
    return result;
}

