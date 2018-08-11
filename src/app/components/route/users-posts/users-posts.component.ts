import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../../../Services/call-api.service';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-users-posts',
  templateUrl: './users-posts.component.html',
  styleUrls: ['./users-posts.component.css']
})
export class UsersPostsComponent implements OnInit {

  postsData = [];
  submitted = false;
  p: number = 1;
  sure = false;
  itemId = '';
  wantDelete = false;
  disabled = false;
  wantEdit = false;
  id:number;

  constructor(private call: CallApiService, private router: Router,private _route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this._route.snapshot.queryParams["id"];
    this.getPosts();
    ////// Get Parameters as object parameters
    // this._route.params.subscribe(params => {
    //   this.id = params['id']
     
    // });
    ///// Get parameters as  QueryParams 
    

  }

  // getPosts() {
  //   this.call.getPostsByUser(sessionStorage.getItem('id')).subscribe(
  //     posts => { this.postsData = posts; this.ngOnInit(); })}
  getPosts() {
    this.call.getPostsByUser(this.id).subscribe(
      posts => { this.postsData = posts; this.ngOnInit(); })}
       

  deleteItem(id) {
    this.call.deletePost(id).subscribe(
      () => {
        this.postsData.splice((this.postsData.findIndex(x => x.id == id)), 1);
      })
  }
  getAllPosts() {
    this.call.getPosts().subscribe(next => { this.postsData = next })
  }

  

}
