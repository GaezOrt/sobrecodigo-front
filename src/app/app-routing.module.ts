import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingUsersComponent } from './ranking-users/ranking-users.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'ranking-users', component: RankingUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }