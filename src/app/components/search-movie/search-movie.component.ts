import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Router, NavigationEnd } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class SearchMovieComponent implements OnInit  {

  movies: Movie[]
  searchMovie: string

  constructor(public movieService: MovieService, public router: Router, public localStorageService: LocalStorageService, private route: ActivatedRoute){

      this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
     }

     this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
           this.router.navigated = false;
           window.scrollTo(0, 0);
        }
    });
      
      this.searchMovie = this.route.snapshot.paramMap.get("movie")
      this.search(this.searchMovie)    
  }

  ngOnInit() {
    
  }
  
  search(newmovie: string) {
    this.movieService.search(newmovie).subscribe((data:any)=>{
      console.log(data)
      this.movies = data.results;

      if(data.results == 0){
        this.router.navigateByUrl('/homepage');
        alert("This title doesn't exist, try again.");
      }
    })
  }

  addMovie(movie: Movie) {
    movie.username = this.localStorageService.retrieve('username')
    this.movieService.addMovie(movie).subscribe( data => {
      this.movies = this.movies.filter(u => u !== movie);
    })
  }

}
