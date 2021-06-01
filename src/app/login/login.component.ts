import { Component, OnInit } from '@angular/core';
import { Login } from '../model/user';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login

  constructor(private rtr:Router) { 
  this.login = new Login()
  }
  Keyname(event: any) {
    const pattern = /[^\s]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  saveUser(){
    console.log(this.login)
    localStorage.setItem('email',this.login.email)
    localStorage.setItem('password',this.login.password)
    this.rtr.navigate(['/list'])
  }
  ngOnInit(): void {
  }

}
