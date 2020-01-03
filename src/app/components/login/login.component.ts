import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {

  public user: User = new User();
  public currentUser: User;

  constructor(private service: UserService,
    private http: HttpClient,
    private router: Router
    ) {}

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnChanges(){
    location.reload();
  }

  onSubmit() {
    this.service.userLogin(this.user);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logout(){
    this.service.userLogout();
  }

}
