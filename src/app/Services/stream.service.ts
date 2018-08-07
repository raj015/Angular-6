import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  dataStream:Observable<Object>;
   constructor() { }
  
  createStream(){
    this.dataStream = new Observable(observer=>{
      setTimeout(() => {
        observer.next({name:'Image no 1',image:'../../assets/Images/1.jpg'})
      }, 1000);
      setTimeout(() => {
        observer.next({name:'Image no 2',image:'../../assets/Images/2.jpg'})
      }, 2000);
      setTimeout(() => {
        observer.next({name:'Image no 3',image:'../../assets/Images/3.jpg'})
      }, 3000);
      setTimeout(() => {
        observer.error()
      }, 5000);
      setTimeout(() => {
        observer.next({name:'Image no 4',image:'../../assets/Images/4.jpg'})
      }, 4000);
      setTimeout(() => {
        observer.complete()
      }, 5000);
    });
    return this.dataStream;
  }

  
}

