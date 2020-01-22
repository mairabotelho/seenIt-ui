import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/signup/signup.component';

import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { MovieComponent } from './components/movie/movie.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MDBBootstrapModule, MdbCardComponent} from 'angular-bootstrap-md';
import {MatGridListModule} from '@angular/material'
import { HomepageComponent } from './components/homepage/homepage.component';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,

    UserComponent,
    LoginComponent,
    HomeComponent,
    MovieComponent,
    SearchMovieComponent,
    HomepageComponent,
    MoviedetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
