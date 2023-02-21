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
import { UserCardComponent } from './user-card/user-card.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LandingComponent } from './landing/landing.component';
import { MatIconModule } from '@angular/material/icon';
import { ProjectPageComponent } from './project-page/project-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobsComponent } from './jobs/jobs.component';
import { MatCommonModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { JobsCardComponent } from './jobs-card/jobs-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    NavbarLandingComponent,
    SignUpComponent,
    DesafiosComponent,
    RankingUsersComponent,
    CardsActiveUsersComponent,
    UserCardComponent,
    ProfilePageComponent,
    LandingComponent,
    ProjectPageComponent,
    JobsComponent,
    ProjectCardComponent,
    CompanyProfileComponent,
    JobsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    FontAwesomeModule,
    MatCommonModule,
    MatSelectModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
