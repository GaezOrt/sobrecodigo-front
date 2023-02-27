import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  jobs:any;
  constructor(private dataJob:JobService) { }

  ngOnInit(): void {

    this.dataJob.obtenerJobs().subscribe((data:any) => {
      console.log(data);
      this.jobs = data.jobs;
    });
  }

  }

