import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;
  public currentUser: User;

  constructor(private http: HttpClient, private router: Router) { }

  private userUrl = environment.baseUrl + '/users';
 
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
