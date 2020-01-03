
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string;

  constructor(private http: HttpClient) { 
  }

  login(user: User){
    return this.http.put<User>('/server/login', user);
  }

}
