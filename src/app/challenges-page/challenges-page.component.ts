import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.css']
})
export class ChallengesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.updateClock();
  }

  totalTime: number = 31;

  updateClock() {
    if (this.totalTime == 0) {
      alert('Final');
    } else {
      this.totalTime -= 1;
      setTimeout(() => this.updateClock(), 1000);
    }
  }

}
