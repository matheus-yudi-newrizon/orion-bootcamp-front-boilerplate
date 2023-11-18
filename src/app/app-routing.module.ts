import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { RegisterFailedComponent } from './components/register-failed/register-failed.component';
import { LoginComponent } from './pages/login/login.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { StartGameComponent } from './pages/start-game/start-game.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: RegisterPageComponent
  },
  {
    path: 'registration-success',
    component: RegisterSuccessComponent
  },
  {
    path: 'registration-failure',
    component: RegisterFailedComponent
  },
  {
    path: 'auth/reset-password',
    component: PasswordResetComponent
  },
  {
    path: 'reset-password-success',
    component: RegisterSuccessComponent
  },
  {
    path: 'reset-password-failure',
    component: RegisterFailedComponent
  },
  {
    path: 'start-game',
    component: StartGameComponent
  },
  // Rota para capturar caminhos não correspondentes
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
