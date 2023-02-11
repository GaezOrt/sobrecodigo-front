import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() title: String;
  @Input() description: String;
  @Input() tags: String;

  constructor() { }

  ngOnInit(): void {
  }

}
