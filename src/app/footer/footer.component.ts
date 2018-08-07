import { Component, OnInit } from '@angular/core';
import { getLocaleDateTimeFormat } from '../../../node_modules/@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  date = Date.now();
  isChecked = false;
  hasDeveloper = true;
  employee = { name: 'Mohammed', age: 20 };
  customer = { name: 'Amir', age: 15 }
  city: string;
  countries: string[] = ['Egypt', 'Canada', 'America', 'Jordan']
  countries1: any = ['Egypt', 20, 'America', 1]
  countries3: [string, number] = ['Egypt', 20]
  warnUser(): void {
    alert("This is my warning message");
  }

  //////// very important object declarate and assign////
  oo: { name: string, age: number } = { name: this.employee.name, age: this.employee.age };

  getDeveloper(x: string): string { return x; }
  logMe(x: boolean) { this.hasDeveloper = x; }
  checkMe(x: boolean) {
    this.isChecked = x;
    this.oo.name = (this.changeEmp(this.employee))['name']
    this.oo.age = (this.changeEmp(this.employee))['age']
  }
  changeCity(c: string) { this.city = c }
  changeEmp(o: object): object {
    // o['age'] = 40;
    // (o as Object)['name'] = 'Awadallah';
    if (this.isChecked) {
      this.oo.name = "Awadallah";
      this.oo.age = 95
    } else {
      this.oo.name = o['name'];
      this.oo.age = o['age'];
    } return this.oo;;

  }



  constructor() {

    // this.employee.name = 'Saad';
  }

  ngOnInit() {
    // this.employee.name='Ali';
    this.city = 'mansoura';
    // this.employee.name = (this.changeEmp(this.employee))['name']
    // this.employee.age = (this.changeEmp(this.employee))['age']
    // this.employee.name = (this.changeEmp(this.employee))['name'];
    // this.employee.age = (this.changeEmp(this.employee))['age']
  }

}
