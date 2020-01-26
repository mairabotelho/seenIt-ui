import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  movies: Movie[]
  private username: string

  constructor(private localStorageService: LocalStorageService, private router: Router, private movieService: MovieService) { 
    this.username = this.localStorageService.retrieve('username')
  }

  ngOnInit() {
    this.movieService.getMovies(this.username)
    .subscribe( data => {
      this.movies = data;
    });
};

  public deleteMovie(movie: Movie){
    this.movieService.deleteMovie(this.username, movie.id).subscribe( data => {
      this.movies = this.movies.filter(u => u !== movie);
    })
  };

}
