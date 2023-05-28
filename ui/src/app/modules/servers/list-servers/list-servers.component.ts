import { Component } from '@angular/core';
import { ServerService } from '../services/server.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-list-servers',
  templateUrl: './list-servers.component.html',
  styleUrls: ['./list-servers.component.css']
})
export class ListServersComponent {
  servers$: Observable<any[][]>;
  serversSubject: BehaviorSubject<any[][]>;

  constructor(private service: ServerService) {
    this.serversSubject = new BehaviorSubject<any[][]>([]);
    this.servers$ = this.serversSubject.asObservable();

    this.getServers();
  }

  deleteServer(id: number) {
    this.service.deleteServer(id).subscribe(resp => {
    this.getServers(); 
    });
  }

  getServers() {
    this.service.fetchServers().subscribe(resp => {
      console.log(resp);
      this.serversSubject.next(resp);
    });
  }
}
