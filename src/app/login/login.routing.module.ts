import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';


const Login: Routes = [
  { path: '' , component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(Login)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
