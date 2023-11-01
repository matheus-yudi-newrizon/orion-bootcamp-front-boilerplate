import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { RegisterFailedComponent } from './components/register-failed/register-failed.component';

const routes: Routes = [
  {
    path: 'sign-up',
    component: RegisterPageComponent
  },
  {
    path: 'registrationSuccess',
    component: RegisterSuccessComponent
  },
  {
    path: 'registrationFailure',
    component: RegisterFailedComponent
  },
  // Rota para capturar caminhos não correspondentes
  {
    path: '**', redirectTo: '/sign-up',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
