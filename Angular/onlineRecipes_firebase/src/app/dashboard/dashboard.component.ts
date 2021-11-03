import { Component, OnInit } from '@angular/core';
import { User } from '../authorization/user.model';
import { AuthorizationService } from '../service/authorization.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   user: User;

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit(): void {
   this.user=this.authorizationService.user;
 }

 onLogout(){
   this.authorizationService.logout();
 }

}
