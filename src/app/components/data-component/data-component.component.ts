import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../../Services/data-service.service";

@Component({
  selector: 'app-data-component',
  templateUrl: './data-component.component.html',
  styleUrls: ['./data-component.component.css']
})
export class DataComponentComponent implements OnInit {

  users: string[];
  user: string;

  constructor(dataService: DataServiceService) {

    this.users = dataService.getUsers();

  }
  onsubmit() {
    this.users.push(this.user);
    this.user = '';
  }

  ngOnInit() {
  }

}
