import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';

import { SearchMovieComponent } from './components/search-movie/search-movie.component';


import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { MatGridListModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopUpMovieComponent } from './components/pop-up-movie/pop-up-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    HomeComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    MyMoviesComponent,
    MoviedetailsComponent,

    SearchMovieComponent,

    UserComponent,

    PopUpMovieComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    MatGridListModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
