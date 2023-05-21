import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServersComponent } from './list-servers/list-servers.component';
import { EditServerComponent } from './edit-server/edit-server.component';

@NgModule({
  declarations: [
    ListServersComponent,
    EditServerComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class ServersModule { }
