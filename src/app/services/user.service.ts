import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class UserService {

  private url: string;
  public currentUser: User;

  constructor(private http: HttpClient, private router: Router) { 
    this.url = environment.url;
  }

  public getUsers() {
    return this.http.get<User[]>(this.url + "/users");
  }

  public deleteUser(username: string) {
    return this.http.delete<boolean>(this.url + "/users/" + username);
  }

  public findUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(this.url + "/users/" + username);
  }
}
