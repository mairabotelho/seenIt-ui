import { Component, OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: Login;

  constructor(private authenticationService: AuthService, private router: Router) {

    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });

    this.login = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.login.username = this.loginForm.get('username').value;
    this.login.password = this.loginForm.get('password').value;

    this.authenticationService.login(this.login).subscribe(data => {
      if (data) {

        console.log('login success');
        this.router.navigateByUrl('/home');
      } else {
        console.log('Login failed');
      }
    });
  }

}
