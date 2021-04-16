import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ReportCardModule { 
  ReportId:number;
  StudentId:number;
  SubjectId:number;
  Marks:number;
  RStatus:string;
  ExamDate:Date;

}
