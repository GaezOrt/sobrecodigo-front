import { Component, OnInit } from '@angular/core';
import { EditProfileService } from 'src/app/services/edit-profile-service.service';
import { JobService } from 'src/app/services/job.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  jobs:any[]=['Argentina', 'USA', 'Uruguay', 'Chile', 'Perú'];
  constructor(private dataJob:JobService, private tokenStorageService:TokenStorageService, private editProfileService:EditProfileService) { }
  isLoggedIn:boolean;
  username:string;
  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();
    
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.editProfileService.getInfoUser().subscribe((val:any)=>console.log(val));
      
  }
    this.dataJob.obtenerJobs().subscribe((data:any) => {
      console.log(data);
      this.jobs = data.jobs;
    });
  }
}
