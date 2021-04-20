import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ReportService} from 'src/app/Services/report.service';
import {MyreportModule} from 'src/app/Modules/myreport/myreport.module';
import {MylevelModule} from 'src/app/Modules/mylevel/mylevel.module';
import { StudentInfoModule } from 'src/app/Modules/student-info/student-info.module';
import { StudentInfoService } from 'src/app/Services/student-info.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  Report:boolean=false;
  i:number=1;
  p:number=1;
  buttondiv:boolean=true;
  AboutUs:boolean=false;

  studid:any=sessionStorage.getItem('studid');
  
  replist:MyreportModule[];
  mylevlist:MylevelModule[];
  studlist:StudentInfoModule[];
  presentstudent:string;

  constructor(private router:Router,private svc:ReportService,private service:StudentInfoService) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('studid'));

    this.service.ShowAllStudent().subscribe((data:StudentInfoModule[])=>
    {

      this.studlist=data;
      var presentstudentlist=this.studlist.filter(x=>x.StudentId==this.studid);
      this.presentstudent= presentstudentlist[0].Name;
      sessionStorage.setItem('presentstudent',this.presentstudent);
    });


  }
logout():void
{

  //sessionStorage.setItem('studid',null);
  sessionStorage.removeItem('studid');
  sessionStorage.removeItem('presentstudent');
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
