import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  buttondiv:boolean=true;
  AboutUs:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
