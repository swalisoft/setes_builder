import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(values = {}) {
    return this.http.post<string>(
      'http://localhost:5000/login',
      JSON.stringify(values),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
  
  register(values = {}) {
    return this.http.post<string>(
      'http://localhost:5000/register',
      JSON.stringify(values),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }


}
