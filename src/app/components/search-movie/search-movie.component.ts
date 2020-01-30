import { Component, OnInit, Injectable} from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Router, NavigationEnd } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms';
import { Review } from 'src/app/models/review';
import { FroalaEditorModule} from 'angular-froala-wysiwyg'
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  
  styleUrls: ['./search-movie.component.css']
})

@Injectable({providedIn: 'root'})
export class SearchMovieComponent implements OnInit  {

  movies: Movie[]
  current: Movie
  searchMovie: string
  reviewForm: FormGroup
  newReview = new FormControl('');
  review: Review
  reviews: Review[]

  constructor(public movieService: MovieService, public router: Router, public localStorageService: LocalStorageService, 
    private route: ActivatedRoute){

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
      
      this.current = {
        id: 0,
        username: '',
        title: '',
        original_language: '',
        original_title: '',
        overview: '',
        release_date: '',
        poster_path: '',
        backdrop_path: '',
        popularity: 0,
        favorite: false,
        watchlist: false
      };

      this.reviewForm = new FormGroup({
        newReview: this.newReview
      });

      this.review = {
        movieId: 0,
        review: '',
        username: ''
      }
  }

  ngOnInit() {
    this.movieService.search(this.searchMovie).subscribe((data:any)=>{
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
        if(data){
          this.movies = this.movies.filter(u => u !== movie);
          alert("movie added")
        }else{
          alert("Movie already added")
        }
      })
  }

  addReview() {
    if(this.reviewForm.get('newReview').value != ''){
      this.review.movieId = this.current.id;
      this.review.username = this.localStorageService.retrieve('username')
      this.review.review = this.reviewForm.get('newReview').value;
      this.movieService.addReview(this.review).subscribe(data => {
        console.log('Successful Post!');
        this.movieService.getReviews(this.current.id).subscribe( data => {
          this.reviews = data;
        });
      }, error => { 
        console.log('Failure Response');
      })

    }else{
      alert('The review field is blank!')
    }
  }

  // Modal
  show(movie: Movie){
    this.current = movie
    let modal  = document.getElementById('modal_1')
    modal.classList.remove('hhidden')
    modal.classList.add('sshow');

    this.movieService.getReviews(this.current.id).subscribe( data => {
      this.reviews = data;
    });
  }

  close() {
      let modal  = document.getElementById('modal_1')
      modal.classList.remove('sshow')
      modal.classList.add('hhidden');
  }

}
