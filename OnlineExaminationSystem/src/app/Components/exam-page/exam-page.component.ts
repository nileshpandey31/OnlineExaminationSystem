import { Component, OnInit } from '@angular/core';
import { QusnInfoService } from 'src/app/Services/qusn-info.service';
import {AddSubModule} from 'src/app/Modules/add-sub/add-sub.module';
import{NgForm} from '@angular/forms';
import { QusnInfoModule } from 'src/app/Modules/qusn-info/qusn-info.module';
import { StudentInfoModule } from 'src/app/Modules/student-info/student-info.module';
import { StudentInfoService } from 'src/app/Services/student-info.service';
import {ReportCardModule} from 'src/app/Modules/report-card/report-card.module';
import {LevelModule} from 'src/app/Modules/level/level.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {

// VAriable declaration section

  rc=new ReportCardModule();
  examlist: boolean = true;
  instruction: boolean = false;
  ExamStarts: boolean = false;
  Scorediv:boolean=false;
  slist:AddSubModule[];    //list of subject object
  qlist:QusnInfoModule[];  //list of qusn object
  cqno:any=0;    //current question number
  getsession:any;   //variable for storing subjectid session
qusnlistbysub:any;  //list of qusn of given subject
qidlist:any;  //list of qid in qusn by subject
cqid:any;  // current question id
lastqno:number;  // last qusn 
selectoptionlist:string[];
anslist:string[];
Score:number=0;
studlist:StudentInfoModule[];
subjectname:string;
presentstudid:any= sessionStorage.getItem("studid");  ///will store student id session
presentsubjectlist:any;
pass:boolean;
fail:boolean;
ResultStatus:string;
gridnumber:any;
levellist:LevelModule[];
lev= new LevelModule(); // instance for inserting level
mylevel:number;
flag:number=0;
presentlevel:number;
qusnlistbysublevel:any;
revlist:any[];



//Variable dclaration section end



  constructor(private service: QusnInfoService,private svc:StudentInfoService,private router:Router) { }

  ngOnInit(): void {
    
    this.service.ShowSubject().subscribe((data:AddSubModule[])=>
    {
  
      this.slist=data;
      console.log(this.slist);  
    });

    this.service.ShowQst().subscribe((data:QusnInfoModule[])=>
    {
      this.qlist=data;
     
    }
    );

    this.svc.ShowAllStudent().subscribe((data:StudentInfoModule[])=>
    {
  
      this.studlist=data;
    });

    this.service.ShowLevel().subscribe((data:LevelModule[])=>
{

  this.levellist=data;
  console.log(this.levellist);
  
});

    
    
  }

  start(subid:number):void{
   
    var setsession = window.sessionStorage.setItem("subid", subid.toString());
    this.getsession = window.sessionStorage.getItem("subid");
   
  this.service.PresentLevel(this.presentstudid,this.getsession).subscribe((data:number)=>
  {
  
    this.presentlevel=data;
    console.log(this.presentlevel);
   
  //console.log(this.getsession);
  this.qusnlistbysub=this.qlist.filter(x=>x.SubjectId==this.getsession);
  console.log(this.qusnlistbysub);
  

 this.presentsubjectlist=this.slist.filter(x=>x.SubjectId==this.getsession);
 this.subjectname=this.presentsubjectlist[0].Subject;

 console.log(this.presentlevel);
this.qusnlistbysublevel=this.qusnlistbysub.filter(x=>x.Level==this.presentlevel+1);
   console.log(this.qusnlistbysublevel);  
  
   //console.log(this.qusnlistbysub);
  this.qidlist=this.qusnlistbysublevel.map(({ QID }) => QID)
  //console.log(this.qidlist);
  this.cqid=this.qidlist[0];
  //console.log(this.cqid);
  this.lastqno=Object.keys(this.qidlist).length;
  this.selectoptionlist= new Array(this.lastqno);
  this.anslist=this.qusnlistbysublevel.map(({ Answer }) => Answer);

  
  //console.log(this.subjectname);

  this.gridnumber=new Array();
  for (let i = 1; i <= this.lastqno; i++) {
    this.gridnumber.push(i);
   


  }
  //console.log(this.gridnumber);
  console.log(this.presentsubjectlist[0].TStatus);
  if(this.presentsubjectlist[0].TStatus=='enable')
  {
    this.examlist=false;
    this.instruction = true;
    this.ExamStarts = false;
  }


    
  });



  }

  next():void{
    this.service.ShowLevel().subscribe((data:LevelModule[])=>
    {
    
      this.levellist=data;
      console.log(this.levellist);
      
    });
    this.Score=0;
    this.start(this.getsession);
    this.Scorediv=false;
    
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

  switchQsn(q:number):void
  {  this.cqno=q-1;
    this.cqid=this.qidlist[q-1];
   
  }

  selectedlist(Opt:string):void
  {
    //console.log(Opt);
    //console.log(this.cqno);
    this.selectoptionlist[this.cqno]=Opt;
    //console.log(this.selectoptionlist);
    //console.log(this.anslist);

  }

  CalculateScore():void{
    

    var individualmarks=this.presentsubjectlist[0].TotalMark/this.lastqno;    
    for(var i=0;i<this.lastqno;i++)
    {
      if(this.selectoptionlist[i]==this.anslist[i])
      this.Score=this.Score+individualmarks;
     
    }
    //console.log(this.Score);
    this.examlist = false;
    this.instruction = false;
    this.ExamStarts = false;
    this.Scorediv=true;
    if(this.Score>this.presentsubjectlist[0].PassingMark)
    {
      this.pass=true;
      this.ResultStatus="Pass";
      this.rc.SLevel=this.presentlevel+1;

    }
    else{
      this.fail=true;
      this.ResultStatus="Fail";
      this.rc.SLevel=this.presentlevel;
    }
    this.rc.StudentId=this.presentstudid;
    this.rc.SubjectId=this.getsession;
    this.rc.Marks=this.Score;
    this.rc.RStatus=this.ResultStatus;
    this.rc.ExamDate=new Date();
   
   

    this.service.InsertReport(this.rc).subscribe((data:boolean)=>{alert(data);
      if(data==true)
      {
        alert('Report Card Table updated!!');
       
      }
      else
      {
        alert('Report Card not updated!!');
      }
    });

    // console.log(studentidsession);
     //console.log(this.presentstudid);

//inserting n updating level table






// method for inserting n updating model

//  console.log(this.levellist.length);

for(var l of this.levellist)
{
  if(l.StudentId==this.presentstudid && l.SubjectId==this.getsession)
  {
      if(this.ResultStatus=="Pass")
      {
        this.mylevel=l.Level +1;
        this.service.UpdateLevel(l.Lid,this.mylevel).subscribe((data:boolean)=>
        {
          if(data)
        alert("level updated!!");
        });
      }
      this.flag=1;
  }
  }
  if(this.flag==0)
  {
    this.lev.StudentId=this.presentstudid;
    this.lev.SubjectId=this.getsession;
    if(this.ResultStatus=="Pass")
    {
       this.mylevel=1;
      this.lev.Level=this.mylevel;
      
      this.service.InsertLevel(this.lev).subscribe((data:boolean)=>
      {
        if(data)
      alert("level inserted!!");
      });
    }
    else
    {
       this.mylevel=0;
      this.lev.Level=this.mylevel;
      console.log(this.lev);
      this.service.InsertLevel(this.lev).subscribe((data:boolean)=>
      {
        if(data)
      alert("level inserted!!");
      });
    }
  }

// method end here

  }
//method for autosubmit
  timesUp(event:any) { if (event.action == "done") { this.CalculateScore(); } }

  //logout method
 
  logout():void
  {
    sessionStorage.removeItem('studid');
    sessionStorage.removeItem('subid');
    alert("You are logged out")
    this.router.navigate(['/Home']);
    
  }

  
}
