import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { RankingUsersComponent } from './components/ranking-users/ranking-users.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignUpCompanyComponent } from './components/sign-up-company/sign-up-company.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { ProjectDetailsPageComponent } from './components/project-details-page/project-details-page.component';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-up-company', component: SignUpCompanyComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'ranking-users', component: RankingUsersComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'company-profile', component: CompanyProfileComponent },
  { path: 'project-page', component: ProjectPageComponent },
  { path: 'project-details', component: ProjectDetailsPageComponent },
  { path: 'jobs-page', component: JobsPageComponent },
  { path: 'job-details', component: JobDetailsComponent },
  { path: 'challenges', component: ChallengesPageComponent },
  { path: 'home', component: LandingComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
