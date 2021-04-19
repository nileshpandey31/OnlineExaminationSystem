import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ReportService} from 'src/app/Services/report.service';
import {MyreportModule} from 'src/app/Modules/myreport/myreport.module';
import {MylevelModule} from 'src/app/Modules/mylevel/mylevel.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  Report:boolean=false;
  i:number=1;
  p:number=2;
  buttondiv:boolean=true;
  AboutUs:boolean=false;

  studid:any=sessionStorage.getItem('studid');
  replist:MyreportModule[];
  mylevlist:MylevelModule[];

  constructor(private router:Router,private svc:ReportService) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('studid'));
   
    
  }
logout():void
{
  
  //sessionStorage.setItem('studid',null);
  sessionStorage.removeItem('studid');
  console.log(sessionStorage.getItem('studid'));
  this.studid=sessionStorage.getItem('studid');
  this.Report=false;
  this.buttondiv=true;
}

  NewExam():void{
    if(sessionStorage.getItem('studid')!=null)
    {
      this.router.navigate(['/Exam']);
    }
    else{
      alert("You are not loged In!!")
      this.router.navigate(['/Login']);
    }
  }

  MyReport():void{
    this.studid=sessionStorage.getItem('studid');
    if(sessionStorage.getItem('studid')!=null)
    {
     
    this.svc.MyReport(this.studid).subscribe((data:MyreportModule[])=>
    {
      //console.log(this.studid);
      this.replist=data;
      //console.log(this.replist);
      this.Report=true;
      this.buttondiv=false;  
      this.svc.MyLevel(this.studid).subscribe((data:MylevelModule[])=>
      {
        this.mylevlist=data;
      });
    });
   
}  else{
  alert("You are not loged In!!")
  this.router.navigate(['/Login']);
}

}

}
