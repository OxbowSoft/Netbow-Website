import { Movie } from '../models/movie.model';

export interface IMovieService {
    movies: Movie[];

    getMovies(): Movie[];

    getMovie(somethingLikeId: number): Movie;
    // more methods i dont remember and really sorry. Michał don't kill me :)
}
