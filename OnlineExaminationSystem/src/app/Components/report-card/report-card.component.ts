import { Component, OnInit } from '@angular/core';
import {AllreportModule} from 'src/app/Modules/allreport/allreport.module';
import {AllevelModule} from 'src/app/Modules/allevel/allevel.module';
import {ReportService} from 'src/app/Services/report.service';
import {Router} from'@angular/router';
@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {
  levellist:AllevelModule[];
  allreplist:AllreportModule[];
  p: number = 1;
  p2:number=1;

  constructor(private svc:ReportService,private router:Router) { }

  ngOnInit(): void {
    this.svc.AllReport().subscribe((data:AllreportModule[])=>
      {
        this.allreplist=data;
        console.log(this.allreplist);

        this.svc.Allevel().subscribe((data:AllevelModule[])=>
        {
          this.levellist=data;
          
        });

      });

  }

  back():void{
    this.router.navigate(['/AdminHome']);

  }

 
  
}