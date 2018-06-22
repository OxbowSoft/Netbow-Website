import { IMovieService } from './imovie.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from './../models/movie.model';


@Injectable()
export class MovieService implements IMovieService {
  movies: Movie[];

  constructor(private http: Http) {}

  getMovies(): Movie[] {
    throw new Error('Method not implemented.');
  }

  getMovie(somethingLikeId: number): Movie {
    throw new Error('Method not implemented.');
  }


}
