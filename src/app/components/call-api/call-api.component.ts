import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../../Services/call-api.service';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent implements OnInit {
  myStream = new Observable<any>();
  mySubscriber = []
  post = { id: '', userId: '', title: '', body: '' };
  submitted = false;
  p: number = 1;
  sure = false;
  itemId = '';
  wantDelete = false;
  disabled = false;
  wantEdit = false;
  constructor(private call: CallApiService) { }
  ngOnInit() { this.callData(); }
  emptyData() {
    this.mySubscriber = [];
  }
  newPost(){
    this.post = {id:'', userId: '', title: '', body: '' };
  }

  defPost(item) {
    this.post = item;
      }
  callData() {
    this.myStream = this.call.getPosts();
    this.myStream.subscribe(
      next => { this.mySubscriber = next ;}
      // ()=>{this.mySubscriber.push('Some Errors')},
      // ()=>{this.mySubscriber.push('Done')}
    )
  }
  // callData() {
  //   this.myStream = this.call.getPostsByUser(1);
  //   this.myStream.subscribe(
  //     next => { this.mySubscriber = next ;})}
  onsubmit() {
    if (this.wantEdit) {
      this.call.editPost(this.post).subscribe(
        value => {
          this.mySubscriber.splice((this.mySubscriber.findIndex(x => x.id == this.post.id)), 1, value);
          this.submitted = true;})
    }
    else {

      this.call.addPost(this.post).subscribe(
        next => { this.mySubscriber.push(next);this.submitted = true; },
        error=>{console.log(error);});
    }
  }

  //////
  // deleteItem(id){
  //   // 
  //   if (confirm('Are you sure?')) {
  //     this.call.deletePost(id).subscribe(
  //       value=>{
  //         // for (const item in this.mySubscriber) {
  //         //   if (this.mySubscriber[item].id==id) {
  //         //     this.mySubscriber.splice(parseInt(item),1);

  //         //   }
  //         // }
  //        this.mySubscriber.splice((this.mySubscriber.findIndex(x=>x.id==id)),1);

  //       })
  // } else {
  //     return false;
  // }
  // }
  deleteItem(id) {
    this.call.deletePost(id).subscribe(
      () => {
        this.mySubscriber.splice((this.mySubscriber.findIndex(x => x.id == id)), 1);
      })
  }
}
