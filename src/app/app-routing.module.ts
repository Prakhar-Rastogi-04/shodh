import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: UserHomeComponent },
  { path: 'adminHome', component: AdminHomeComponent },
  { path: 'signin', component: SignInUpComponent },
  { path: 'profileedit', component: ProfileEditComponent },
  
  // { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
