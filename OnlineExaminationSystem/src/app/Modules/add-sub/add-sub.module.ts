import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AddSubModule { 
  SubjectId: number;
  Subject: string;
  TotalMark: string;
  PassingMark: string;
  ExamDuration: string;
  TStatus: string;
}
