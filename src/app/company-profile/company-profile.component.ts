import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { ModalSwitchService } from '../services/modal-switch.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  jobs:any;

  modalSwitch: boolean;

  constructor(private dataJob:JobService, private modalSS: ModalSwitchService) { }

  ngOnInit(): void {

    this.modalSS.$modal.subscribe((value)=> {this.modalSwitch = value})
    this.dataJob.obtenerJobs().subscribe((data:any) => {
      console.log(data);
      this.jobs = data.jobs;
    });
  }

  openModal() {
    this.modalSwitch = true;
  }
  }

