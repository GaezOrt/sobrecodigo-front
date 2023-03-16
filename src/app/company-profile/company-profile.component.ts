import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
declare var $: any;


@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  jobs:any[];
  constructor(private dataJob:JobService) { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('[data-bs-toggle="tooltip"]').tooltip();
    })

    this.dataJob.obtenerJobs().subscribe((data:any) => {
      console.log(data);
      this.jobs = data;
    });
  }

  }

