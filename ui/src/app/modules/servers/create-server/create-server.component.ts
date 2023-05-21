import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent {

  constructor(private service: ServerService) {}

  onSubmit(f: NgForm) {
    console.log(f.value);

    this.service.createServer(f.value).subscribe(resp => {
      console.log(resp);
    })
  }

  goToListServers() {

  }
}

