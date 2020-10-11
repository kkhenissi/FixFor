import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {
    email: '',
    password: ''
  }
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    console.log('************///++///**************', this.registerUserData)
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log('genereted token ======>',res.token)
        localStorage.setItem('token',  'Bearer ' + res.token);

        this._router.navigate(['/']);
      },
      
      (err) => {
        
        console.log('No genereted token ======>')
      }
    );
  }


}