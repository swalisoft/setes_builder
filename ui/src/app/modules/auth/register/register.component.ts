import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private service: AuthService,
    private router: Router,
  ) {}

  onSubmit(f: NgForm) {
    console.log(f.value);

    this.service.register(f.value).subscribe(resp => {
      this.router.navigate(['/login']);
    })
  }

  goToListServers() {

  }

}

