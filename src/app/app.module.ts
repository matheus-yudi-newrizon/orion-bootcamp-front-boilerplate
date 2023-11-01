
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
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
import { LoginComponent } from './pages/login/login.component';
import { CheckboxComponent } from './pages/login/checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PasswordRequirementComponent,
    RegisterSuccessComponent,
    RegisterFailedComponent,
    FormRegisterComponent,
    NavbarComponent,
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
    LoginComponent,
    CheckboxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
