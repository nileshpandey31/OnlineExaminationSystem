import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Student:boolean=false;
   Admin:boolean=false;

   StudentLogin(){
this.Student=true;
   }
   
   AdminLogin(){
    this.Admin=true;
       }

}
