import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

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

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService) { }

  private userUrl = '/server/users';
 
  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(username: string) {
    return this.http.delete<Boolean>(this.userUrl + "/" + username);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

  public findUserByUsername(username: string): Observable<User>{
    return this.http.get<User>(this.userUrl + username);
  }

  userLogin(user: User){
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    this.loginService.login(user).subscribe(user => 
      {this.currentUser = user;
        this.currentUser.password = null;
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.loggedIn = true;
        location.reload();
      });
      
      this.router.navigate(['/users']);


  }

  userLogout(){
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    location.reload();
  }

  isLoggedIn(){
    return this.loggedIn;
  }



}
