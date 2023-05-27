import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private service: AuthService,
    private routes: Router,
  ) {}

  onSubmit(f: NgForm) {
    console.log(f.value);

    this.service.login(f.value).subscribe(resp => {
      if(resp !== null) {
        localStorage.setItem('user_id', resp[0])
        this.routes.navigate(['servers']);
      } 

    })
  }
  goToListServers() {
  }
}


