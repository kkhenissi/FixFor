import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class AuthService {

  private _registerUrl = "http://localhost:5000/api/v1/register";
  private _loginUrl = "http://localhost:5000/api/v1/auth";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    console.log('---------------- registerUser ------------')
    console.log(user)
    console.log(this._registerUrl)
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

//   logoutUser() {
//     localStorage.removeItem('token')
//     this._router.navigate(['/events'])
//   }

   getToken() {
     console.log('/////////////////// geet token /////////////',localStorage.getItem('token'))
     return localStorage.getItem('token');
   }

   loggedIn() {
     return !!localStorage.getItem('token');
   }

}