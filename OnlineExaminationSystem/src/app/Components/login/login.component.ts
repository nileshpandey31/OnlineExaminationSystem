import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms'
import{StudentInfoModule} from 'src/app/Modules/student-info/student-info.module';
import{StudentInfoService} from 'src/app/Services/student-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any=[];
  svc:StudentInfoService;
  stud=new StudentInfoModule;
  email:string;
  password:string;

  constructor(svc:StudentInfoService) { this.svc=svc;}

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
  this.email=login.value.Email;
    this.password=login.value.pass;

    this.svc.Login(this.email,this.password).subscribe((data:string)=> {
      console.log(data);
      if(data=="Login successful")
      {
        alert('Login successful');
      }
      else{
        alert('Invalid credentials');
      }
    });
}

}
