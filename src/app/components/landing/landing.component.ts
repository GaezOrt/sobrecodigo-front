import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  jobs:any[]=['Argentina', 'USA', 'Uruguay', 'Chile', 'Perú'];
  constructor(private dataJob:JobService) { }

  ngOnInit(): void {

    this.dataJob.obtenerJobs().subscribe((data:any) => {
      console.log(data);
      this.jobs = data.jobs;
    });
  }
}
