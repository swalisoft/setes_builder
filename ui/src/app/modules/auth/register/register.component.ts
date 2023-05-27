import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service: AuthService) {}

  onSubmit(f: NgForm) {
    console.log(f.value);

    this.service.register(f.value).subscribe(resp => {
      console.log(resp);
    })
  }

  goToListServers() {

  }

}

