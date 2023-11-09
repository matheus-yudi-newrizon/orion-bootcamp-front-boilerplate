
import { AppComponent } from './app.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PasswordRequirementComponent } from './components/password-requirement/password-requirement.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { RegisterFailedComponent } from './components/register-failed/register-failed.component';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormRegisterComponent } from './components/form-register/form-register.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { MatProgressSpinnerModule}  from '@angular/material/progress-spinner';
import { LoginComponent } from './pages/login/login.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PopUpHowToPlayComponent } from './components/pop-up-how-to-play/pop-up-how-to-play.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    PasswordRequirementComponent,
    RegisterSuccessComponent,
    RegisterFailedComponent,
    FormRegisterComponent,
    NavbarComponent,
    LoginComponent,
    PopUpHowToPlayComponent,
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
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
