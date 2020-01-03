import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always'},
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent},
  { path: 'users', component: UserComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
