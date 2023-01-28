import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardsListComponent } from './cards-list/cards-list.component';
import { NavbarLandingComponent } from './navbar-landing/navbar-landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DesafiosComponent } from './desafios/desafios.component';
import { RankingUsersComponent } from './ranking-users/ranking-users.component';
import { CardsActiveUsersComponent } from './cards-active-users/cards-active-users.component';
@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    NavbarLandingComponent,
    SignUpComponent,
    DesafiosComponent,
    RankingUsersComponent,
    CardsActiveUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
