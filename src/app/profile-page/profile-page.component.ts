import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  projects:any; 
  constructor(private dataProject:ProjectService) { }

  ngOnInit(): void {

    this.dataProject.obtenerProjects().subscribe(data => {
      console.log(data.projects);
      this.projects = data.projects;
    });

  }

}
