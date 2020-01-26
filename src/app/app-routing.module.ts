import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component'
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component'


const routes: Routes = [
  // { path: 'login', component: LoginComponent, runGuardsAndResolvers: 'always'},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent},
  { path: 'users', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'mymovies', component: MyMoviesComponent},
  { path: 'searchmovie/:movie', component: SearchMovieComponent},
  { path: 'moviedetails/:movie', component: MoviedetailsComponent},
  { path: 'homepage', component: HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
