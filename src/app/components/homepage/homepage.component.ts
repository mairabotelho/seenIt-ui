import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { LocalStorageService } from 'ngx-webstorage';
import { FormGroup, FormControl } from '@angular/forms';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  movies : Movie[]
  username: string
  current: Movie
  searchMovie: string
  reviewForm: FormGroup
  newReview = new FormControl('');
  review: Review
  reviews: Review[]

  constructor(public movieService: MovieService, private localStorageService: LocalStorageService) { 
    this.username = this.localStorageService.retrieve('username')

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
    this.movieService.trending().subscribe((data:any)=>{
      console.log(data)
      this.movies = data.results;
  
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
    let modal  = document.getElementById('modal_2')
    modal.classList.remove('hhidden')
    modal.classList.add('sshow');

    this.movieService.getReviews(this.current.id).subscribe( data => {
      this.reviews = data;
    });
  }

  close() {
      let modal  = document.getElementById('modal_2')
      modal.classList.remove('sshow')
      modal.classList.add('hhidden');
  }

}
