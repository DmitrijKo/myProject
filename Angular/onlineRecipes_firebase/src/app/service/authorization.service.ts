import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../authorization/user.model';
import { tap } from 'rxjs/operators';

export interface AuthorizationResponse {
  idToken: string; //  A Firebase Auth ID token for the authenticated user.
  email: string; // 	The email for the authenticated user.
  refreshToken: string; // 	A Firebase Auth refresh token for the authenticated user.
  expiresIn: string; // 	The number of seconds in which the ID token expires.
  localId: string; // 	The uid of the authenticated user.
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {

  public user: User;
  public userSub = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router:Router) {}


  private userAuthorization(response:AuthorizationResponse){
   this.user=new User(
     response.email, 
     response.localId, 
     response.idToken, 
     new Date( new Date().getTime()+ +response.expiresIn*1000 ) 
     );
   this.userSub.next(this.user);  
   localStorage.setItem('user',JSON.stringify(this.user));  
 }

 signup(email: string, password: string) {
   return this.http.post<AuthorizationResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCupv35yP3wpNzHRyJqwrfCsUBo5-A6HEQ',
     {
       email: email,
       password: password,
       returnSecureToken: true
     }).pipe(tap((response)=>{
       this.userAuthorization(response);
     }));
 }

 login(email:string, password:string){
   return this.http.post<AuthorizationResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCupv35yP3wpNzHRyJqwrfCsUBo5-A6HEQ',
     {
       email: email,
       password: password,
       returnSecureToken: true
     }).pipe( tap((response)=>{
       this.userAuthorization(response);
     }));
 }

 savedLogin(){
   const user=JSON.parse(localStorage.getItem('user'));
   if (!user) return ;
   if (new Date(user.expires) < new Date()) return;
   this.user=new User(user.email, user.id,user.token,new Date(user.expires));
   this.userSub.next(this.user);
   this.router.navigate(['/']);
 }

 logout(){
   this.user=null;
   this.userSub.next(null);
   localStorage.removeItem('user');
   this.router.navigate(['/auth']);
 }
}
