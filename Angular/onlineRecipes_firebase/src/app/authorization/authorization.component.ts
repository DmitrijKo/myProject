import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationResponse, AuthorizationService } from '../service/authorization.service';
import { NavigationService } from '../service/navigation.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent implements OnInit {

  isLogin = true;
  isLoading = false;
  errorMessage = null;

  constructor(
     private authorizationService: AuthorizationService, 
     private router:Router, 
     private navigationService: NavigationService
     ) {}

  ngOnInit(): void {
     this.navigationService.loginSubject.subscribe((isLogin) => {
         this.isLogin = isLogin;
     })
  }

 onSubmit(authForm:NgForm){
   this.isLoading=true;

   let authObservable:Observable<AuthorizationResponse>;

   if (this.isLogin){
      authObservable=this.authorizationService.login(authForm.value.email, authForm.value.password);
   }else{
      authObservable=this.authorizationService.signup(authForm.value.email, authForm.value.password);
   }

   authObservable.subscribe((result)=>{
     console.log(this.authorizationService.user);
     this.isLoading=false;
     this.errorMessage=null;
     this.router.navigate(['/']);
   }, (error)=>{
     this.errorMessage="Įvyko nežinoma klaida";
     if (error.error && error.error.error){
       switch (error.error.error.message) {
         case 'EMAIL_EXISTS':      this.errorMessage = "Toks vartotojas jau registruotas";
           break;
         case 'EMAIL_NOT_FOUND':   this.errorMessage = "El.paštas nerastas";
           break;
         case 'INVALID_PASSWORD':  this.errorMessage = "Įvestas neteisingas slaptažodis";
           break;
       }

     }
     this.isLoading=false;
   });
   
 }

 onRead() {
   this.router.navigate(['recipes-read']);
 }
}
