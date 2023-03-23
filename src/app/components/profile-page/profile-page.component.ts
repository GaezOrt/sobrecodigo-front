import { Component, OnInit } from '@angular/core';
import { EditProfileService } from 'src/app/services/edit-profile-service.service';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  projects:any[];
  usuarioDto:any;
  constructor(private dataProject:ProjectService, private editProfile:EditProfileService) { }

  ngOnInit(): void {
    this.editProfile.getInfoUser().subscribe(val=>{
      console.log(val);
      this.usuarioDto= val;
    })
    this.dataProject.obtenerPersonalProjects().subscribe(data => {
      console.log(data);
      this.projects = data;
    });
  }
}
