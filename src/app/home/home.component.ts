import { Component, OnInit } from '@angular/core';
import { ClientResponse } from '../externalService/ClientResponse';
import { ClientService } from '../externalService/client.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   clients: ClientResponse[]=[];

  constructor(private ClientService: ClientService){}

  ngOnInit(): void {
    this.ClientService.getAllClients().subscribe(clients => {
      this.clients = clients;
    });
  }
}
