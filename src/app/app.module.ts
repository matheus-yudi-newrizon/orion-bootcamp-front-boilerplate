
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

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule}  from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EmailTemplateComponent } from './models/email-template/email-template.component';

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
    EmailTemplateComponent
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
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
