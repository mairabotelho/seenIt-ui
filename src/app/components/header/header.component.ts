import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class HeaderComponent implements OnInit {

  movie: string

  constructor(public authService: AuthService, public router: Router, private movieService: MovieService) {
  }

  ngOnInit() {

  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
