import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { LandingComponent } from './landing/landing.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { RankingUsersComponent } from './ranking-users/ranking-users.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'ranking-users', component: RankingUsersComponent },
  { path: 'profile-page', component: ProfilePageComponent },
  { path: 'project-page', component: ProjectPageComponent},
  { path: 'jobs', component: JobsComponent},
  {path: 'home', component:LandingComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
