import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  // { path: 'login', component: LoginComponent, runGuardsAndResolvers: 'always'},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent},
  { path: 'users', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'movies', component: MovieComponent},
  { path: 'searchmovie/:movie', component: SearchMovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
