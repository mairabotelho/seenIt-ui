import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { JwtAuthResponse } from '../models/jwt-auth-response';
import { LocalStorageService } from 'ngx-webstorage';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
  }

  singup(user: User): Observable<any> {
    return this.httpClient.post(environment.baseUrl + '/signup', user);
  }

  login(login: Login): Observable<boolean> {
    return this.httpClient.post<JwtAuthResponse>(environment.baseUrl + '/login', login).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }

  isAuthenticated(): boolean {
    return this.localStorageService.retrieve('username') != null;
  }

  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
  }
}
