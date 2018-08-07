import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  item:string;
  cart:string[]=[];
  addItem(){
    this.cart.push(this.item);
    this.item='';
  }
  constructor() { }

  ngOnInit() {
  }

}
