import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero";
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  model = new Hero(1,'Muhammad Awadallah','Egypt',37);
  submitted=false;
  locations = ['Egypt','Saudi Arabia','Bahrin','Lebanon']
  onsubmit(){this.submitted=true;}
  newHero(){this.model=new Hero(this.model.id+1,'','');}
  get check(){return JSON.stringify(this.model)}
  constructor() { }

  ngOnInit() {
  }

}

