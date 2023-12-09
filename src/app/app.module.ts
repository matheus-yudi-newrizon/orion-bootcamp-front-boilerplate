import { AppComponent } from './app.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PasswordRequirementComponent } from './components/password-requirement/password-requirement.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { RegisterFailedComponent } from './components/register-failed/register-failed.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { ModalForgotPasswordComponent } from './components/modal-forgot-password/modal-forgot-password.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PopUpHowToPlayComponent } from './components/pop-up-how-to-play/pop-up-how-to-play.component';
import { StartGameComponent } from './pages/start-game/start-game.component';
import { GameComponent } from './pages/game/game.component';
import { PopUpSuccessConfirmationComponent } from './components/pop-up-success-confirmation/pop-up-success-confirmation.component';
import { ConfirmResetPasswordComponent } from './components/confirm-reset-password/confirm-reset-password.component';
import { ReturnConfirmationComponent } from './components/return-confirmation/return-confirmation.component';
import { ResetPasswordSuccessComponent } from './components/reset-password-success/reset-password-success.component';
import { ResetPasswordFailureComponent } from './components/reset-password-failure/reset-password-failure.component';
import { PopUpGameOverComponent } from './components/pop-up-game-over/pop-up-game-over.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { PopUpUnsuccessConfirmationComponent } from './components/pop-up-unsuccess-confirmation/pop-up-unsuccess-confirmation.component';
import { ConfirmEmailComponent } from './components/confirm-email /confirm-email.component';
import { ConfirmEmailFailureComponent } from './components/confirm-email-failure/confirm-email-failure.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    PasswordRequirementComponent,
    RegisterSuccessComponent,
    RegisterFailedComponent,
    FormRegisterComponent,
    NavbarComponent,
    ModalForgotPasswordComponent,
    LoginComponent,
    PasswordResetComponent,
    PopUpHowToPlayComponent,
    StartGameComponent,
    GameComponent,
    PopUpSuccessConfirmationComponent,
    ConfirmResetPasswordComponent,
    ReturnConfirmationComponent,
    ResetPasswordSuccessComponent,
    ResetPasswordFailureComponent,
    PopUpGameOverComponent,
    AccessDeniedComponent,
    PopUpUnsuccessConfirmationComponent,
    ConfirmEmailComponent,
    ConfirmEmailFailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
