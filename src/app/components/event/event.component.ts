import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  greet=''
  event=''
  sayHello(par){
    this.greet=`Hello ${par}`
  }

  getEvent(e){
    this.event= e.type;
  }
  getEventwith(e,val){
    this.event= e.type;
    this.greet=val
  }

  constructor() {
    
   }

  ngOnInit() {
  }

}
