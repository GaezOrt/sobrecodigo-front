import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card-simple',
  templateUrl: './job-card-simple.component.html',
  styleUrls: ['./job-card-simple.component.css']
})
export class JobCardSimpleComponent implements OnInit {

  showFull = false;
  @Input() cardInfo:any;
  showLessBool=false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.cardInfo)
    
  }
  showLess(){
    this.showLessBool=true;
  }
  showDetails() {
    this.showFull = true;
  }
}
