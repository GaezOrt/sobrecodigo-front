import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
interface Posicion {
  value: string;
  viewValue: string;
}

interface Modality {
  value: string;
  viewValue: string;
}

interface Currency {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})

export class JobFormComponent implements OnInit {

    newJob:any;
    title:string;
    description:string;
    position:string;
    modality:string;


  posiciones: Posicion[] = [
    { value: "Trainee", viewValue: "Trainee" },
    { value: "Jr", viewValue: "Jr" },
    { value: "Ssr", viewValue: "Ssr" },
    { value: "Sr", viewValue: "Sr"}
  ];

  modalities: Modality[] = [
    {value: "Presencial", viewValue: "Presencial"},
    {value: "Hibrido", viewValue: "Hibrido"},
    {value: "Remoto", viewValue: "Remoto"}
  ];

  currencies: Currency[] = [
    {value: "USD", viewValue: "USD"},
    {value: "ARS", viewValue: "ARS"}
  ]


  constructor(private jobService:JobService) { }

  ngOnInit(): void {
    this.newJob.title=this.title;
    this.newJob.position = this.position;
    this.newJob.description = this.description;
    this.newJob.modality = this.modality;
  
   this.jobService.createJob(this.newJob);
  }
  
  submitInfo(){
    console.log(this.newJob);

  }
}
