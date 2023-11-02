import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientResponse } from './ClientResponse';
import { ClientRequest } from './ClientRequest';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8090/menu/client';

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<ClientResponse[]> {
    return this.http.get<ClientResponse[]>(this.apiUrl);
  }

  createClient(clientRequest: ClientRequest): Observable<any> {
    return this.http.post(this.apiUrl, clientRequest);
  }
}
