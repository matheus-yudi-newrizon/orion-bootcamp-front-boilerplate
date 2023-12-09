import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { RegisterFailedComponent } from './components/register-failed/register-failed.component';
import { LoginComponent } from './pages/login/login.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { StartGameComponent } from './pages/start-game/start-game.component';
import { GameComponent } from './pages/game/game.component';
import { ConfirmResetPasswordComponent } from './components/confirm-reset-password/confirm-reset-password.component';
import { ResetPasswordFailureComponent } from './components/reset-password-failure/reset-password-failure.component';
import { ResetPasswordSuccessComponent } from './components/reset-password-success/reset-password-success.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { ConfirmEmailComponent } from './components/confirm-email /confirm-email.component';
import { ConfirmEmailFailureComponent } from './components/confirm-email-failure/confirm-email-failure.component';
import { AuthGuard } from './services/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';

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
    path: 'auth/confirm-email',
    component: ConfirmEmailComponent
  },
  {
    path: 'auth/confirm-email-failure',
    component: ConfirmEmailFailureComponent
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
    component: ResetPasswordSuccessComponent
  },
  {
    path: 'reset-password-failure',
    component: ResetPasswordFailureComponent
  },
  {
    path: 'start-game',
    component: StartGameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'game',
    component: GameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'confirm-reset-password',
    component: ConfirmResetPasswordComponent
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent
  },
  // Rota para capturar caminhos não correspondentes
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AppRoutingModule {}
