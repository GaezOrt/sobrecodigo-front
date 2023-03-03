import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Posicion {
  value: string;
  viewValue: string;
}

interface Employee {
  value: string;
  viewValue: string;
}

interface Modality {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  posicion = new FormControl("Trainee");
  employee = new FormControl("1-10");
  modality = new FormControl("Presencial");

  employees: Employee[] = [
    {value: "1-10", viewValue: "1-10"},
    {value: "11-50", viewValue: "11-50"},
    {value: "50 o más", viewValue: "50 o más"}
  ]

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
  ]
  constructor() {
    this.posicion.valueChanges.subscribe(s => {
      console.log(`The selected value is ${s}`);
    });
   }

  ngOnInit(): void {
  }

}
