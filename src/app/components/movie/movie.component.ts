import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[];

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe( data => {
      this.movies = data;
    });
};

}
