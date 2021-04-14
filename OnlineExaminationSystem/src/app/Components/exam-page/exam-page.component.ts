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
  cqno:any=0;
  getsession:any;
qusnlistbysub:any;
qidlist:any;
cqid:any;;




 

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

  start(subid:number):void{
    this.examlist=false;
    this.instruction = true;
    this.ExamStarts = false;
    
    var setsession = window.sessionStorage.setItem("subid", subid.toString());
     this.getsession = window.sessionStorage.getItem("subid");
   console.log(this.getsession);
   this.qusnlistbysub=this.qlist.filter(x=>x.SubjectId==this.getsession);
   console.log(this.qusnlistbysub);
  this.qidlist=this.qusnlistbysub.map(({ QID }) => QID)
  console.log(this.qidlist);
  this.cqid=this.qidlist[0];
  console.log(this.cqid)
   
 

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
   this.cqno=this.cqno+1;
    this.cqid=this.qidlist[this.cqno];
    console.log(this.cqid);
  }
  decrement():void
  {
    this.cqno=this.cqno-1;
    this.cqid=this.qidlist[this.cqno];
    console.log(this.cqid);
  }

}
