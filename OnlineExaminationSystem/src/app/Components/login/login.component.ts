import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms'
import{StudentInfoModule} from 'src/app/Modules/student-info/student-info.module';
import{StudentInfoService} from 'src/app/Services/student-info.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any=[];


  buttondiv:boolean=true;
  AboutUs:boolean=false;
  isChecked = false;

  svc:StudentInfoService;
  stud=new StudentInfoModule;
  email:string;
  password:string;
  studlist:StudentInfoModule[];
 studentidsession:any;   //variable for storing student session
 presentstudent:any;


  constructor(svc:StudentInfoService,private router: Router) { this.svc=svc;}

  ngOnInit(): void {
    this.svc.ShowAllStudent().subscribe((data:StudentInfoModule[])=>
    {

      this.studlist=data;
      console.log(this.studlist);
    });

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

        this.presentstudent=this.studlist.filter(x=>x.Email==this.email);
        console.log(this.presentstudent);
      //   console.log(this.studlist);
      //  console.log(this.presentstudent);
      //  console.log(this.presentstudent[0].StudentId);

      // localStorage.setItem('studid', this.presentstudent[0].StudentId.toString());
      // this.studentidsession = localStorage.getItem('studid');

        var setsession = window.sessionStorage.setItem("studid", this.presentstudent[0].StudentId.toString());
        this.studentidsession = window.sessionStorage.getItem("studid");
        console.log(this.studentidsession);
        this.router.navigate(['/Home']);


      }
      else{
        alert('Invalid credentials');
      }
    });
}

//method for admin login

AdminLog(login:NgForm)
{
if(login.value.Email=="admin1@g.com" && login.value.pass=="Aa@1")
{
  alert("Admin Login Successfull!!!!");
  this.router.navigate(['/AdminHome']);
}

}

}
