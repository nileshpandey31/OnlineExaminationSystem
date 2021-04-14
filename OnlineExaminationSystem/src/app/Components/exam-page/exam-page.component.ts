import { Component, OnInit } from '@angular/core';
import { QusnInfoService } from 'src/app/Services/qusn-info.service';
import {AddSubModule} from 'src/app/Modules/add-sub/add-sub.module';
import{NgForm} from '@angular/forms';
import { QusnInfoModule } from 'src/app/Modules/qusn-info/qusn-info.module';

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
  qlist:QusnInfoModule[];
  cqno:number=1;


 

  constructor(private service: QusnInfoService) { }

  ngOnInit(): void {
    
    this.service.ShowSubject().subscribe((data:AddSubModule[])=>
    {
  
      this.slist=data;
    });

    this.service.ShowQst().subscribe((data:QusnInfoModule[])=>
    {
      this.qlist=data;
    }
    );
    
    
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

  increment():void
  {
    this.cqno++;
  }
  decrement():void
  {
    this.cqno--;
  }

}
