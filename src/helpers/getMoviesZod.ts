import { movieSchema } from "../types/movieSchema";
import { movies } from "../data/movies";

export let zodMovies = movies.map( movie => {
    return movieSchema.parse(movie);
})