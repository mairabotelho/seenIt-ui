import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Users[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  }

  deleteUser(user: Users): void {
    this.userService.deleteUser(user.username)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

}
