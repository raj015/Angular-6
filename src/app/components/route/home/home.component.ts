import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../../../Services/call-api.service';
import { observable, Observable } from '../../../../../node_modules/rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stream= new Observable<any>();
  constructor(private call:CallApiService) {

   }

   getPosts(){
     this.stream=this.call.getPosts();
     this.stream.subscribe(
       next=>{console.log(next)}
     )
   }

  ngOnInit() {
  }

}
