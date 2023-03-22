import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from './job.model';
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

    newJob:Job ={
      title: '',
      position: '',
      description: '',
      modalidad: '',
      salary: '',
      currency:'',
      enterprise:'',
      tecnologies:''
    };
    title:string;
    description:string;
    position:any;
    modality:any;
    enterprise:any;
    tecnologies:string;

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
    
   
  }
  
  submitInfo(){

    this.newJob.title=this.title;
    this.newJob.position = {id:1};
    this.newJob.description = this.description;
    this.newJob.modalidad = {id:1}
    this.newJob.currency = {id:1}
    this.newJob.salary=2.00
    this.newJob.enterprise= this.enterprise;
    this.newJob.tecnologies= this.tecnologies;
    console.log(this.newJob);
   this.jobService.createJob(this.newJob).subscribe(val=>console.log(val));

  }
}
