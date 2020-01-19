import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

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

}
