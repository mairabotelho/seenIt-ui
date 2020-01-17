import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  user: Users;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {

    this.signupForm = this.formBuilder.group({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    this.user = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  ngOnInit() {
  }

  onSubmit() {
    this.user.username = this.signupForm.get('username').value;
    this.user.firstName = this.signupForm.get('firstName').value;
    this.user.lastName = this.signupForm.get('lastName').value;
    this.user.email = this.signupForm.get('email').value;
    this.user.password = this.signupForm.get('password').value;
    this.user.confirmPassword = this.signupForm.get('confirmPassword').value;

    this.authService.singup(this.user).subscribe(data => {
      console.log('User created');
      alert('User created successfully ');
      this.router.navigateByUrl('/login'); },
    error => {console.log('register failed'); } );
  }}
