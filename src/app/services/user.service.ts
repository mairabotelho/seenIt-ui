import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;
  public currentUser: User;
  private loggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  private userUrl = '/server/users';
 
  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(username: string) {
    return this.http.delete<Boolean>(this.userUrl + "/" + username);
  }

  public findUserByUsername(username: string): Observable<User>{
    return this.http.get<User>(this.userUrl + username);
  }
}