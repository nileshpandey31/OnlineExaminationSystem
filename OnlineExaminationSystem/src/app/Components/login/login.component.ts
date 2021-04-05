import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any=[];

  constructor() { }

  ngOnInit(): void {
  }

  Student:boolean=false;
  Admin:boolean=false;

  StudentLogin(){
    this.Student = true;
    this.Admin = false;
  }
   
  AdminLogin(){
    this.Admin = true;
    this.Student=false;
  }
  loginData(login:NgForm):void
{
  console.log(login.value);
}

}
