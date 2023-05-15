import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrivacyPolicyComponent } from 'src/app/privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class AppFooter  {
  constructor(public dialog: MatDialog){}
  openDialog(){
    this.dialog.open(PrivacyPolicyComponent)
  }
}
