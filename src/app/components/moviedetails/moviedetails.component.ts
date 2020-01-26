import { Component, OnInit, SecurityContext } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Location } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Url } from 'url';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  movieName: string
  movie: Movie
  username: string
  imageurl: string

  constructor(public movieService: MovieService, private route: ActivatedRoute, private localStorageService: LocalStorageService,
    private location: Location, private sanitizer: DomSanitizer) { 
    this.username = this.localStorageService.retrieve('username')
    this.movieName = this.route.snapshot.paramMap.get("movie")
    this.findMovie(this.movieName)

  }

  ngOnInit() {
  }

  findMovie(name:string){
    this.movieService.findMovie(name, this.username).subscribe( data => {
      this.movie = data;
    });


  }

  cancel() {
    this.location.back(); 
  }

}
