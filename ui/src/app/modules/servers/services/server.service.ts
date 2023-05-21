import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: HttpClient) { }

  fethServers() {
    return this.http.get<string>('http://localhost:5000/servers')
  }

  createServer(values = {}) {
    return this.http.post<string>(
      'http://localhost:5000/servers',
      JSON.stringify(values),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
