import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  movies : Movie[]
  username: string

  constructor(public movieService: MovieService, private localStorageService: LocalStorageService) { 
    this.username = this.localStorageService.retrieve('username')
  }

  ngOnInit() {
    this.movieService.trending().subscribe((data:any)=>{
      console.log(data)
      this.movies = data.results;
  
    })
  }

}
