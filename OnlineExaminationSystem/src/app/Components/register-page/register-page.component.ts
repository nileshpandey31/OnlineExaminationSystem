import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{StudentInfoModule} from 'src/app/Modules/student-info/student-info.module';
import{StudentInfoService} from 'src/app/Services/student-info.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  model:any=[];
 
  svc:StudentInfoService;
  stud:StudentInfoModule=
  {
    StudentId:1,
    Name:'string',
    Mobile:'string',
    Email:'string',
    DOB:   new Date("10/12/2020"),
    College:'string',
    City:'string',
    State:'string',
    Qualifacton:'string',
    YearOfCompletion:'string',
    Password:'string',
    LastLogin:new Date("10/12/2020")

  };

//initiate some value



  constructor(svc:StudentInfoService) { this.svc=svc;}
  ngOnInit(): void {
  }

  RegData(Reg:NgForm):void
{
  console.log(Reg.value);
  this.stud.Name=Reg.value.name;
  this.stud.Mobile=Reg.value.mobno;
  this.stud.Email=Reg.value.email;
  this.stud.DOB=Reg.value.dob;
  this.stud.College=Reg.value.clg;
  this.stud.City=Reg.value.city;
  this.stud.State=Reg.value.state;
  this.stud.Qualifacton=Reg.value.qual;
  this.stud.YearOfCompletion=Reg.value.yoc;
  this.stud.Password=Reg.value.pass;
  this.svc.RegisterStudent(this.stud).subscribe((data:boolean)=>{alert(data);
    if(data==true)
    {
      alert('new Student added');
     
      
    }
  });


}

}
