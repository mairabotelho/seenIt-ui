import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { JwtAuthResponse } from '../models/jwt-auth-response';
import { LocalStorageService } from 'ngx-webstorage';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {}

  singup(user: User): Observable<any> {
    return this.httpClient.post('/server/signup', user);
  }

  login(login: Login){
    return this.httpClient.post<JwtAuthResponse>('/server/login', login).pipe(map (data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }
}
