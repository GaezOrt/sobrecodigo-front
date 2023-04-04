import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  public projects: any[];

  constructor(private readonly dataProject:ProjectService) { }

  ngOnInit(): void {
    this.dataProject.obtenerProjects().subscribe(data => {
      console.log(data);

      this.projects = data;
    });
  }

  limpiar() {
   
  }
}
