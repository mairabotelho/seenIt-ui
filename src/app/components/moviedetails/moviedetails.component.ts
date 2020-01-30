import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  movieName: string
  movie: Movie
  username: string

  constructor(public movieService: MovieService, private route: ActivatedRoute, private localStorageService: LocalStorageService,
    private location: Location, private router: Router) { 
     
     this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
           this.router.navigated = false;
           window.scrollTo(0, 0);
        }
    });

    this.username = this.localStorageService.retrieve('username')
    this.movieName = this.route.snapshot.paramMap.get("movie")
  }

  ngOnInit() {
    this.movieService.findMovie(this.movieName, this.username).subscribe( data => {
      this.movie = data;
    });

  }

  cancel() {
    this.location.back(); 
  }

}
