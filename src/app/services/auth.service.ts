import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { JwtAuthResponse } from '../models/jwt-auth-response';
import { LocalStorageService } from 'ngx-webstorage';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({ providedIn: 'root'})
export class AuthService {

  private url: string;

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
    this.url = environment.url;
  }

  singup(user: Users): Observable<any> {
    return this.httpClient.post(this.url + '/signup', user);
  }

  login(login: Login): Observable<boolean> {
    return this.httpClient.post<JwtAuthResponse>(this.url + '/login', login).pipe(map(data => {
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
