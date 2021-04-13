import { Component, OnInit } from '@angular/core';
import { QusnInfoService } from 'src/app/Services/qusn-info.service';
import {AddSubModule} from 'src/app/Modules/add-sub/add-sub.module';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {

  examlist: boolean = true;
  instruction: boolean = false;
  ExamStarts: boolean = false;
  slist:AddSubModule[];


 

  constructor(private service: QusnInfoService) { }

  ngOnInit(): void {
    this.service.ShowSubject().subscribe((data:AddSubModule[])=>
    {
  
      this.slist=data;
    });
    
  }

  start():void{
    this.examlist=false;
    this.instruction = true;
    this.ExamStarts = false;
  }

  startexam(): void {
    this.examlist = false;
    this.instruction = false;
    this.ExamStarts = true;
  }
  examstarts(): void {
    this.examlist = false;
    this.instruction = false;
    this.ExamStarts = true;
  

  }

}
