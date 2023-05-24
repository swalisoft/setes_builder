import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service: AuthService) {}

  onSubmit(f: NgForm) {
    console.log(f.value);

    this.service.login(f.value).subscribe(resp => {
      console.log(resp);
    })
  }
  goToListServers() {
  }
}


