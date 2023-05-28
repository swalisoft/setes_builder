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
      `http://192.168.193.128:5000/servers?user_id=${userId}`
    )
  }

  deleteServer(id: number) {
    return this.http.delete(
      `http://192.168.193.128:5000/servers/${id}`
    )
  }

  createServer(values = {}) {
    return this.http.post<string>(
      'http://192.168.193.128:5000/servers',
      JSON.stringify({
        ...values,
        user_id: localStorage.getItem('user_id')
      }),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}
