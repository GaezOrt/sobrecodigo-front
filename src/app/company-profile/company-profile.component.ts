import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { ModalSwitchService } from '../services/modal-switch.service';
import {MatDialog} from '@angular/material/dialog';
import { JobFormComponent } from '../modals/job-form/job-form.component';


@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  jobs:any;

  modalSwitch: boolean;

  constructor(private dataJob:JobService, private dialogRef: MatDialog) { }

  ngOnInit(): void {

    /*this.modalSS.$modal.subscribe((value)=> {this.modalSwitch = value})
    this.dataJob.obtenerJobs().subscribe((data:any) => {
      console.log(data);
      this.jobs = data.jobs;
    });*/
  }

  openDialog() {
    this.dialogRef.open(JobFormComponent);
  }
}
 /* openModal() {
    this.modalSwitch = true;
  }
  }*/

