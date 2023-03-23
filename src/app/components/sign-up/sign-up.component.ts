import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service.service';
import { RegisterService } from 'src/app/services/register-service.services';
import { TechnologyService } from 'src/app/services/technology.service';
import { SelectedTechnologies } from './selected-technologies.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  rubro:string;
  technologies:any;
  selectedTechnologies:SelectedTechnologies={
    angular: false,
    springBoot: false,
    vue: false,
    react: false,
    reactNative: false,
    nodeJs: false,
    python: false,
    next: false
  };
  constructor(private registerService:RegisterService, private technologiesService:TechnologyService, private router:Router, private snackBar:MatSnackBar, private loginService:LoginService) { }

  ngOnInit(): void {
    this.technologiesService.getTechnologies().subscribe(val=>{this.technologies=val, console.log(val)});
  }
  
  
  submitRegister(){
    console.log(this.selectedTechnologies);
    this.snackBar.open("Signing Up", undefined, {
      duration: 3000,
      panelClass: 'my-custom-snackbar-loading'
    });
   
    this.registerService.registerNewUser(this.username,this.email, this.password, this.rubro, this.selectedTechnologies).then(async val=>{
      if(val===true){
        this.snackBar.open("Signed up correctly.", undefined, {
          duration: 3000,
          panelClass: 'my-custom-snackbar-success'
        })
        this.router.navigate(['/home']);
      }else{
        this.snackBar.open("Email already in use.", undefined, {
          duration: 3000,
          panelClass: 'my-custom-snackbar-error'
        })
      }
    });

  }


  toggleAngular(event:any) {
    if ( event.target.checked ) {
        this.selectedTechnologies.angular = true;
   }else{
    this.selectedTechnologies.reactNative = false;
   }
}


toggleReactNative(event:any) {
  if ( event.target.checked ) {
      this.selectedTechnologies.reactNative = true;
 }else{
  this.selectedTechnologies.reactNative = false;
 }
}


toggleReact(event:any) {
  if ( event.target.checked ) {
      this.selectedTechnologies.react = true;
 }else{
  this.selectedTechnologies.react = false;
 }
}
toggleVue(event:any) {
  if ( event.target.checked ) {
      this.selectedTechnologies.vue = true;
 }else{
  this.selectedTechnologies.vue = false;
 }
}
toggleSpringBoot(event:any) {
  if ( event.target.checked ) {
      this.selectedTechnologies.springBoot = true;
 }else{
  this.selectedTechnologies.springBoot = false;
 }
}
toggleNodeJs(event:any) {
  if ( event.target.checked ) {
      this.selectedTechnologies.nodeJs = true;
 }else{
  this.selectedTechnologies.nodeJs = false;
 }
}

toggleNext(event:any) {
  if ( event.target.checked ) {
      this.selectedTechnologies.next = true;
 }else{
  this.selectedTechnologies.next = false;
 }
}

}
