import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-card',
  templateUrl: './jobs-card.component.html',
  styleUrls: ['./jobs-card.component.css']
})
export class JobsCardComponent implements OnInit {

  @Input() cardInfo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
