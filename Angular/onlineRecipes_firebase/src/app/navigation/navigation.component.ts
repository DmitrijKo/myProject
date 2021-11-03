import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

  loginActive: boolean = true;
  registernActive: boolean;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
     
  }

  onClickLogin() {
    this.registernActive = false;
    this.navigationService.loginSubject.next(true);
    this.loginActive = true;
  }

  onClickRegister() {
    this.loginActive = false;
    this.navigationService.loginSubject.next(false);
    this.registernActive = true;
  }
}
