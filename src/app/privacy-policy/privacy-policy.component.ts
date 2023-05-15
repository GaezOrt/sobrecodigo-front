import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private router:Router,public dialog:MatDialog) { }

  ngOnInit(): void {

  }
  acceptPolicy(){
    this.dialog.closeAll()
  }
}
