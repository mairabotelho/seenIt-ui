import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateComponent } from './components/update/update.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, runGuardsAndResolvers: "always"},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
