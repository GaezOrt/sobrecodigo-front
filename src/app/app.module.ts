import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu'
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { NavbarLandingComponent } from './components/navbar-landing/navbar-landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ChallengesComponent } from './components/challenges/challenges.component';
import { RankingUsersComponent } from './components/ranking-users/ranking-users.component';
import { CardsActiveUsersComponent } from './components/cards-active-users/cards-active-users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { MatIconModule } from '@angular/material/icon';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JobsComponent } from './components/jobs/jobs.component';
import { MatCommonModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { JobsCardComponent } from './jobs-card/jobs-card.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';
import { JobFullInfoComponent } from './components/job-full-info/job-full-info.component';
import { SignUpCompanyComponent } from './components/sign-up-company/sign-up-company.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import {JobFormComponent } from './components/modals/job-form/job-form.component'
import { FormsModule } from '@angular/forms';
import { JobFilterPipe } from './jobs-page/job-filter.pipe';
import {MatGridListModule} from '@angular/material/grid-list'
import { Loading } from './components/loading/loading.component'

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AppFooter } from './components/footer/footer.component';
import { ProjectDetailsPageComponent } from './components/project-details-page/project-details-page.component'
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from './helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    NavbarLandingComponent,
    SignUpComponent,
    ChallengesComponent,
    RankingUsersComponent,
    CardsActiveUsersComponent,
    UserCardComponent,
    ProfilePageComponent,
    LandingComponent,
    ProjectPageComponent,
    JobsComponent,
    ProjectCardComponent,
    CompanyProfileComponent,
    JobsCardComponent,
    SignInComponent,
    JobDescriptionComponent,
    JobFullInfoComponent,
    JobFullInfoComponent,
    SignInComponent,
    SignUpCompanyComponent,
    JobsPageComponent,
    JobFormComponent,
    JobFilterPipe,
    AppFooter,
    Loading,
    ProjectDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    FontAwesomeModule,
    MatCommonModule,
    MatSelectModule,
    RouterModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MatSnackBarModule

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
