import {  Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

export class Trabajo  {
      posicion: string
      experiencia: string
      empresa: string
      ubicacion: string
      contacto: string
      comentario: string
}


@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent implements OnInit{

  constructor() {}

  empleos? : Trabajo[];

  ngOnInit(): void {
    this.empleos = this.trabajos;
  }


  posicion : string = '';
  ubicacion : string = '';
  experiencia : string = '';

  limpiar() {
    this.posicion = '';
    this.ubicacion = '';
    this.experiencia = '';
  }



  //simulando que esto me trae la API
  trabajos = [
    {
      posicion: 'full Stack',
      experiencia: 'junior',
      empresa: 'google',
      ubicacion: 'remoto',
      contacto: 'linkedin@gmail.com',
      comentario: 'necesitas 10 años de experiencia',
    },
    {
      posicion: 'full Stack',
      experiencia: 'trainee',
      empresa: 'google',
      ubicacion: 'remoto',
      contacto: 'linkedin@gmail.com',
      comentario: 'necesitas 10 años de experiencia',
    },
    {
      posicion: 'backend',
      experiencia: 'junior',
      empresa: 'google',
      ubicacion: 'remoto',
      contacto: 'linkedin@gmail.com',
      comentario: 'necesitas 10 años de experiencia',
    },
    {
      posicion: 'frontend',
      experiencia: 'junior',
      empresa: 'google',
      ubicacion: 'remoto',
      contacto: 'linkedin@gmail.com',
      comentario: 'necesitas 10 años de experiencia',
    },
    {
      posicion: 'full Stack',
      experiencia: 'senior',
      empresa: 'google',
      ubicacion: 'remoto',
      contacto: 'linkedin@gmail.com',
      comentario: 'necesitas 10 años de experiencia',
    },
  ];

}
