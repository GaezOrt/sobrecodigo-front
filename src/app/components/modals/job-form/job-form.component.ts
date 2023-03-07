import { Component, OnInit } from '@angular/core';
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


  constructor() { }

  ngOnInit(): void {

    // this.dataJob.obtenerJobs().subscribe((data:any) => {
    //   console.log(data);
    //   this.jobs = data.jobs;
    // });
  }

}
