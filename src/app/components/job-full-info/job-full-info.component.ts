import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-full-info',
  templateUrl: './job-full-info.component.html',
  styleUrls: ['./job-full-info.component.css']
})
export class JobFullInfoComponent implements OnInit {

  @Input() cardInfo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
