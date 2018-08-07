import { Component, OnInit } from '@angular/core';
import { StreamService } from '../Services/stream.service';
import { Observable } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {

  myStream = new Observable<Object>();
  constructor(private Stream: StreamService) { }
  mySubcriber = [];
  ngOnInit() {
  }
  empty() {
    this.mySubcriber = [];
  }
  loadMe() {
    this.myStream = this.Stream.createStream();
    this.myStream.subscribe(
      next => { this.mySubcriber.push(next)},
      () => { this.mySubcriber.push({name:'Some Errors'}) },
      () => { this.mySubcriber.push({name:'Done'}) }

    )
  }

}
