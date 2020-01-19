import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  movies : Movie[];
  movie: string;


  constructor(private localStorageService: LocalStorageService, private movieService: MovieService, private router: Router) {
     
   }

  ngOnInit() {
  }

  search() {
    this.movieService.search(this.movie).subscribe((data:any)=>{
      console.log(data)
      this.movies = data.results;
    })
  }

  addMovie(movie: Movie) {
    movie.username = this.localStorageService.retrieve('username')
    this.movieService.addMovie(movie).subscribe( data => {
      this.movies = this.movies.filter(u => u !== movie);
    })
  }

}
