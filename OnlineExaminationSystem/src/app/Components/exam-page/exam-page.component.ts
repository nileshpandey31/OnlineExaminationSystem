import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {
examlist:boolean=true;
instruction:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  start():void{
    this.examlist=false;
    this.instruction=true;
  }

}
