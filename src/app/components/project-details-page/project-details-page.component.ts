import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.css'],
})


export class ProjectDetailsPageComponent implements OnInit {

  id:string;
  project:any;

  container:any
  slidePosition = 1;
  slides:any



  constructor(private projectService:ProjectService, private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.container=document.querySelector("#carrusel")
    this.slides = document.querySelectorAll("#image-container ");

    this.projectService.getProjectById(Number(this.route.snapshot.paramMap.get('id'))).subscribe(val=>{
      console.log(val);
      this.project=val;
    })
  }
}
