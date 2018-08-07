import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  fName:string;
  lName:string;
  age:number;
  img:string;
  constructor() {

   }

  ngOnInit() {
  }

}
