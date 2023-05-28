import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor(private http: HttpClient) { }

  fetchServers() {
    const userId = localStorage.getItem('user_id');
    return this.http.get<any[][]>(
      `http://localhost:5000/servers?user_id=${userId}`
    )
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
