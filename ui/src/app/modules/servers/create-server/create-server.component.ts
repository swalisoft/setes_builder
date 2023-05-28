import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent {

  constructor(
    private service: ServerService,
    private router : Router
    ) {}
    
  onSubmit(f: NgForm) {
    this.service.createServer(f.value).subscribe(resp => {
      console.log(resp)
      this.router.navigate(['servers']);
      

    })
  }

  goToListServers() {

  }
}

