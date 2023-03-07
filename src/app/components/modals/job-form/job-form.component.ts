import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})

export class JobFormComponent implements OnInit {
  // jobs:any[]=['Argentina', 'USA', 'Uruguay', 'Chile', 'Perú'];
  // positions:any[]=['Backend', 'Frontend', 'Data Analytics', 'Database'];
  // experiences:any[]=['Trainee', 'Junior', 'Semi-senior', 'Senior'];
  // jobControl:any;
  // experience:any;
  // position:any;
  // selected="Ubicación";


  constructor() { }

  ngOnInit(): void {

    // this.dataJob.obtenerJobs().subscribe((data:any) => {
    //   console.log(data);
    //   this.jobs = data.jobs;
    // });
  }

}
