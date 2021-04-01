import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-students',
  templateUrl: './search-students.component.html',
  styleUrls: ['./search-students.component.css']
})
export class SearchStudentsComponent implements OnInit {

  st:boolean=false;
  sf:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  searchstudent():void
  {
    this.st=true;
    this.sf=false;
  }

}
