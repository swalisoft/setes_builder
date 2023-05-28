import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(values = {}) {
    return this.http.post<string>(
      'http://192.168.193.128:5000/login',
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
      'http://192.168.193.128:5000/register',
      JSON.stringify(values),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }


}
