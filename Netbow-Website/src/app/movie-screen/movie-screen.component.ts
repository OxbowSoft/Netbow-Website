import { MovieService } from './../services/movie-service/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../entities/movies/movie';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ox-movie-screen',
  templateUrl: './movie-screen.component.html',
  styleUrls: ['./movie-screen.component.css']
})
export class MovieScreenComponent implements OnInit {
  movieList: Movie[];
  loading: boolean;

  constructor(private movieService: MovieService) {
    // this.loading = true;
  }

  ngOnInit() {
    this.movieService.getMovie((data) => {
      this.loading = false;
      this.movieList = data;
    }, () => {
      this.loading = true;
    });
  }

}
