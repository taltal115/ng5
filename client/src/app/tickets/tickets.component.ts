import { Component, OnInit } from '@angular/core';
import {MockService} from "../mock.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  characters: Observable<any[]>;
  columns: string[];

  constructor(private atService: MockService) {}

  ngOnInit() {
    this.columns = this.atService.getColumns();
    //["name", "age", "species", "occupation"]
    this.characters = this.atService.getCharacters();
    //all data in mock-data.ts
  }

  newTicket() {
    console.log('new ticket');
  }

}
