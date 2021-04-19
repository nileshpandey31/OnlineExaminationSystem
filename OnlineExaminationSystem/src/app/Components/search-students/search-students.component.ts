import { Component, OnInit } from '@angular/core';

import {StudentInfoService} from '../../Services/student-info.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { QusnInfoService } from 'src/app/Services/qusn-info.service';
import {AddSubModule} from 'src/app/Modules/add-sub/add-sub.module';
import {SelectStudentModule} from '../../Modules/select-student/select-student.module';


@Component({
  selector: 'app-search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.css']
})
export class SearchStudentsComponent implements OnInit {


  buttondiv:boolean=true;
  AboutUs:boolean=false;

  model:any=[];
  slist = new SelectStudentModule();
  finalSlist : SelectStudentModule[];
  Techlist:AddSubModule[];
  st:boolean=false;
  sf:boolean=true;
  svc:StudentInfoService;


  stateInfo: any[] = [];
  state:any;
  countryInfo: any[] = [];
  cityInfo: any[] = [];

  constructor(private http: HttpClient, private service: QusnInfoService )
  {  }

  ngOnInit(): void {
    this.getCountries();
    this.service.ShowSubject().subscribe((data:AddSubModule[])=>
    {
      this.Techlist=data;
    });

  }
  getCountries(){
    this.service.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }
  onChangeCountry() {
    this.stateInfo=this.countryInfo[100].States;
    // this.cityInfo=this.stateInfo[10].Cities;
    console.log(this.stateInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo=this.stateInfo[stateValue].Cities;
    console.log(this.cityInfo);
  }

  searchstudent(searchform:NgForm):void
  {

    console.log('subject :',searchform.value.tech);
    var state = this.stateInfo[searchform.value.state].StateName;
    console.log("State name : "+ state);
   this.slist.Technology = searchform.value.tech;
   this.slist.state = state;
   this.slist.city = searchform.value.city;
   this.slist.Level = searchform.value.level;
   this.slist.Marks = searchform.value.marks;
   console.log("Inside student list :"+this.slist);
   this.service.SearchStudent(this.slist).subscribe((data:SelectStudentModule[])=>{
   this.finalSlist=data;
   console.log("Inside Search Student :"+ this.finalSlist);
     if(data.length==0)
       alert("No matching data found");
     else
       alert("Match found ");
   });

   this.st=true;
   this.sf=false;
 }

}
