import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})


export class ProfilePageComponent implements OnInit {
  faGithub = faGithub;

  projects:any;
  constructor(private dataProject:ProjectService) { }

  ngOnInit(): void {
    this.dataProject.obtenerProjects().subscribe(data => {
      console.log(data);
      this.projects = data.project;
    });
  }

}
