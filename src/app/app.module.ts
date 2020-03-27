import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserModule } from './user/user.module';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Router } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ATMSimulatorComponent } from './user/atmsimulator/atmsimulator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserHomeComponent,
    UserLoginComponent,
    ATMSimulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
