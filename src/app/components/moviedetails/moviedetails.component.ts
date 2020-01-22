import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  movieName: string
  movie: Movie
  username: string

  constructor(public movieService: MovieService, private route: ActivatedRoute, private localStorageService: LocalStorageService) { 
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

}
