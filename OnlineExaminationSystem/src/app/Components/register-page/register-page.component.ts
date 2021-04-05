import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  model:any=[];
  constructor() { }

  ngOnInit(): void {
  }

  RegData(Reg:NgForm):void
{
  console.log(Reg.value);
}

}
