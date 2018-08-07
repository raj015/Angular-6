import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../../../Services/call-api.service';
import { Observable } from '../../../../../node_modules/rxjs';
import { Router } from '../../../../../node_modules/@angular/router';
import { UsersPostsComponent } from '../users-posts/users-posts.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  usersStream = new Observable<any>();
  users = [];
  active: number;
  onClick(index: number) {
    this.active = index;
  }

  constructor(private call: CallApiService, private router: Router, private posts: UsersPostsComponent) {

  }

  getUsers() {
    this.usersStream = this.call.getUsers();
    this.usersStream.subscribe(
      next => { this.users = next; },
      error => { console.log('Errrrrrrror') }
    )
  }
  ngOnInit() {
    this.getUsers();

  }

  navigate(id='1') {

    if (localStorage.getItem('id') !== null) {
      sessionStorage.removeItem('id');
    } else {
      sessionStorage.setItem('id', id);
      this.posts.getPosts();
      this.router.navigate(['/userspost']);
    }

   

  }

}
