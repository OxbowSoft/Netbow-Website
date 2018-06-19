import { Observable, Subscribable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Movie } from '../../entites/movies/movie';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class MovieService {
  movieList: Movie[];
  page = 1;
  category: any;

  constructor(private http: Http) {
    this.http.get('https://api.themoviedb.org/3/genre/tv/list?api_key=99453365bfe4540972684d60cf0c1b02&language=pl')
      .subscribe((response) => {
        this.category = response.json().genres;
      });
    this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=99453365bfe4540972684d60cf0c1b02&language=pl')
      .subscribe((response) => {
        this.category.push(...response.json().genres);
      });
  }

  getMovie(callback, started) {
    started();
    this.http.get('https://api.themoviedb.org/3/discover/tv?api_key=99453365bfe4540972684d60cf0c1b02&language=pl&page=' + this.page)
      .subscribe((response) => {
        this.movieList = [];
        let res = response.json().results;
        res.forEach(movie => {
          this.movieList.push(new Movie(movie.name, this.categoryCreate(movie.genre_ids), movie.overview, movie.poster_path));
        });
        callback(this.movieList);
      }, (error) => {
        console.log(error);
      });
  }

  categoryCreate(ids) {

    let categoryString;
    categoryString = ids.map((id) => {
      const category = this.category.find(cat => {
        return cat.id === id;
      })

      return category.name;
    });
    return categoryString;
  }

}