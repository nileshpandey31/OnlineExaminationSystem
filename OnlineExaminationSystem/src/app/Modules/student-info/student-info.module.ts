import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StudentInfoModule { 
  StudentId:number;
  Name:string;
  Mobile:string;
  Email:string;
  DOB:Date;
  College:string;
  City:string;
  State:string;
  Qualifacton:string;
  YearOfCompletion:string;
  Password:string;
   LastLogin:Date;
}

//changes done