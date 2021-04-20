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

  tempstate:any;
  buttondiv:boolean=true;
  AboutUs:boolean=false;

  model:any=[];
  slist : SelectStudentModule={
    StudentId: null,
    Name: null,
    Email: null,
    Subject: null,
    Level: 0,
    Marks: 0,
    
    //Id :number;
   //Id :number;
    Technology: null,
   state: null,
   city: null

  };
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

  
    if(searchform.value.state!=undefined)
    {
     this.tempstate = this.stateInfo[searchform.value.state].StateName;
      console.log("State name : "+this.tempstate);
    }
    else
    {
     this.tempstate =this.slist.state;
     //console.log(this.tempstate );
    }
    if(searchform.value.tech!=undefined)
    {
      this.slist.Technology = searchform.value.tech;
      console.log(this.slist.Technology);
    }

    if(this.tempstate!=null)
    {
      this.slist.state = this.tempstate;
      console.log(this.slist.state);
    }
    

    if(searchform.value.city!=undefined)
    {
      this.slist.city = searchform.value.city;
      console.log( this.slist.city);
    }
   
    if(searchform.value.level!=undefined)
    {
      this.slist.Level = searchform.value.level;
      console.log(this.slist.Level);
    }

    if(searchform.value.marks!=undefined)
    {
      this.slist.Marks = searchform.value.marks;
      console.log(this.slist.Marks);
    }

 console.log(this.slist.Marks + ' '+this.slist.city + '' + this.slist.state + '' +  this.slist.Technology + '' + this.slist.Level);
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
