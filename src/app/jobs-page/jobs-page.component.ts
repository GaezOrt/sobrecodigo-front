import {  Component, OnInit } from '@angular/core';

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

  constructor() { }

  posicion : string = '';
  ubicacion : string = '';
  experiencia : string = '';

  //creo un array de strings para mostrar en la vista los filtros que estan en uso
  filtros = [''];

  filtrar(){
    if (this.posicion != '') {
      //se filtra la variable local 
      this.empleos = this.empleos?.filter( (value) => value.posicion == this.posicion)
      //y se muestra el filtro
      this.filtros.push(this.posicion);
    }
    if (this.ubicacion != '') {
      this.empleos = this.empleos?.filter( (value) => value.ubicacion == this.ubicacion)
      this.filtros.push(this.ubicacion);
    }
    if (this.experiencia != '') {
      this.empleos = this.empleos?.filter( (value) => value.experiencia == this.experiencia)
      this.filtros.push(this.experiencia)
    }

    //para que no queden repetidos los filtros
    this.filtros = [... new Set(this.filtros)]
  }

  limpiar() {
    //para limpiar vuelvo a asignar lo que trajo la api a la variable local
    this.empleos = this.trabajos;

    //y limpio los filtros
    this.filtros = ['']; 
    this.posicion = '';
    this.ubicacion = '';
    this.experiencia = '';
  }


  empleos? : Trabajo[];

  ngOnInit(): void {
    this.empleos = this.trabajos;
    //asigno lo que me trae la api a una variable local 
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
