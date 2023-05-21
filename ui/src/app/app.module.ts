import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './modules/auth/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateServerComponent } from './modules/servers/create-server/create-server.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateServerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
