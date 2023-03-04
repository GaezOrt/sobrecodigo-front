import { Component, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.css'],
})


export class ProjectDetailsPageComponent implements OnInit {
  @Input()project= {
    "name": "PlayGuess Card Game",
    "author": [ "Juanito perez"],
    "description": "Animation is a method by which still figures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film. Today, many animations are made with computer-generated imagery.",
    "tags": ["html","css","javascript"],
    "images":["https://images.unsplash.com/photo-1545291794-6177b0f94c5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80","https://images.unsplash.com/photo-1677709678888-8100c8bfcf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80","https://images.unsplash.com/photo-1545291794-6177b0f94c5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"],
    "gitLink": "www.google.com"
  }
  container:any
  slidePosition = 1;
  slides:any


  
  constructor() {
    
  }
  
  ngOnInit(): void {
    this.container=document.querySelector("#carrusel")
    this.slides = document.querySelectorAll("#image-container ");

  }
}
