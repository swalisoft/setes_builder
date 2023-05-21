import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './modules/auth/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateServerComponent } from './modules/servers/create-server/create-server.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateServerComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
