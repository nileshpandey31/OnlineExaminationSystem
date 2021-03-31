import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  score: number ;
  Pass: boolean = false;
  Fail: boolean = false;

  scorechange() {
    if (this.score <= 35) {
      this.Fail = true;
      this.Pass = false;
    }
    else if (this.score > 35) {
      this.Pass = true;
      this.Fail = false;
    }
  }
}