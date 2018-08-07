import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  users: string[]

  constructor() {
    this.users = []
  }

  getUsers() { return this.users }



}
