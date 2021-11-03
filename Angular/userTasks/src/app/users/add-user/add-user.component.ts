import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userName = "";
  userSurname = "";

  addUser(name, surname) {
    if (name.value != '' && surname.value != '') {
      this.userService.addUser(name.value, surname.value),
        (name.value = ''),
        (surname.value = '');
    }
  }

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}
}
