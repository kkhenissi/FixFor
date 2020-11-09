import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/userModel';
import { AuthService } from 'src/app/services/auth.service';
import { GenderUserEnum } from '../../shared/gender-enum';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentGender = '';
  loginUserData = {
    email: '',
    password: ''
  };
  currentUser: UserModel;
  usersGender: Array<string>;

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
     this.usersGender = Object.keys(GenderUserEnum).filter(key => isNaN(+key));
    console.log('GenderUserEnum==>', GenderUserEnum);
  }

  loginUser () {

    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', 'Bearer ' + res.token);
        this._router.navigate(['/']);
      },
      err => {
        localStorage.setItem('token', null);
        console.log('initialise token in local storage ', err);
      }
    );
  }

}
