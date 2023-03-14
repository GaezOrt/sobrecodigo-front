import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { JobService } from 'src/app/services/job.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
jobs:any[];
positions:any[]=['Backend', 'Frontend', 'Data Analytics', 'Database'];
experiences:any[]=['Trainee', 'Junior', 'Semi-senior', 'Senior'];
jobControl:any;
experience:any;
position:any;
selected="Ubicación";


  constructor(private dataJob:JobService) { }

  ngOnInit(): void {

    this.dataJob.obtenerJobs().subscribe((data:any[]) => {
      console.log(data);
      this.jobs = data;
    });
  }

}
