import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { ListServersComponent } from './modules/servers/list-servers/list-servers.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { CreateServerComponent } from './modules/servers/create-server/create-server.component';
import { EditServerComponent } from './modules/servers/edit-server/edit-server.component';
import { HomeComponent } from './modules/auth/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, 
  },
  {
    path: 'servers',
    component: ListServersComponent, 
  },
  {
    path: 'servers/create',
    component: CreateServerComponent
  },
  {
    path: 'servers/:id/edit',
    component: EditServerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
