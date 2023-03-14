import { Component, OnInit } from '@angular/core';
import { Trabajo } from '../interfaces/jobs-interface';
import { JobService } from 'src/app/services/job.service';
@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css'],
})
export class JobsPageComponent implements OnInit {
  constructor(private jobServices: JobService) {}
  empleos?: Trabajo[];

  ngOnInit(): void {
    //simulando que esto me trae la API
    this.jobServices.obtenerJobs().subscribe((data: any) => {
      console.log(data);
      this.empleos = data.jobs;
    });
  }

  position: string = '';
  location: string = '';
  experience: string = '';
  mail: string;
  company: string;
  description: string;

  limpiar() {
    this.position = '';
    this.location = '';
    this.experience = '';
    this.mail = '';
    this.description = '';
  }
}
