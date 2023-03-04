import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalSwitchService } from 'src/app/services/modal-switch.service';

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

  posicion = new FormControl("Trainee");
  modality = new FormControl("Presencial");
  currency = new FormControl("USD");

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
  constructor(private modalSS: ModalSwitchService) {
    this.posicion.valueChanges.subscribe(s => {
      console.log(`The selected value is ${s}`);
    });
   }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalSS.$modal.emit(false)
  }

}
