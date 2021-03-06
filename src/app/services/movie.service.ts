import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { LocalStorageService } from 'ngx-webstorage';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string
  currentPage = 0

  constructor(private localStorageService: LocalStorageService, private http: HttpClient) {
    this.url = environment.url
    
  }

  search(movie: string) {
      return this.http
      .get<Movie[]>(`https://api.themoviedb.org/3/search/movie?api_key=40cdd3b4b71fd5f548fa95e11561ece2&query=${movie}` );
  }

  trending(){
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/trending/movie/day?api_key=40cdd3b4b71fd5f548fa95e11561ece2');
  }

  addMovie(movie: Movie){
    return this.http.post(this.url + '/movies', movie);
  }

  addReview(review: Review){
    return this.http.post(this.url + '/review', review)
  }

  getMovies(username: string) {
    return this.http.get<Movie[]>(this.url + '/movies/all/' + username);
  }

  getReviews(movieId: number){
    return this.http.get<Review[]>(this.url + '/review/' + movieId)
  }


  deleteMovie(username : string, id: number){
    let string = id.toString();
    const params = new HttpParams().set('id', string);

    return this.http.delete<Boolean>(this.url + '/movies/' + username, {params});
  }

  findMovie(movie:string, username: string){
    const params = new HttpParams().set('movieTitle', movie).set('username', username);
    return this.http.get<Movie>(this.url + '/movies', {params});
  }

}