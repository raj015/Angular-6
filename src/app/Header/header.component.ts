import { Component } from '@angular/core';
import { Person } from '../Models/Person';
@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['../app.component.css']
})
export class HeaderComponent {
    author = 'Muhammad Awadallah';
    Bio = 'about me';
    proInfo = 'Programming Languages';
    myTitle = 'proInfo = $event.target.value ';
    persons: Person[];
    employee: {} = { name: 'ali', age: 20 };
    carrers = [
        { job: 'Web Developer', time: 'Full Time', noJob: 4 },
        { job: 'Web Designer', time: 'Part Time', noJob: 1 },
        { job: 'IOS Developer', time: 'Full Time', noJob: 2 },
    ];
    kids: Object[]
    citizens = [
        { name: 'Muhammad awadallah', islife: true },
        { name: 'Reda Assaker', islife: false },
        { name: 'Saad awadallah', islife: true },
        { name: 'Ali Mosa', islife: false }
    ]
    hasnickName: boolean = false;
    nickName = 'Mido'
    originalName = 'Muhammad'
    degree = 400
    myImage = 'https://support.kickofflabs.com/wp-content/uploads/2016/06/300x150.png';
    aImage = 'https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-9/10609673_1467690916823234_1352811231833236515_n.jpg?_nc_cat=0&oh=cfb0f9705110b515f54dd2bc940f7723&oe=5BC58B01';
    mImage = 'https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-9/36175960_10155351995076956_2576957644338102272_n.jpg?_nc_cat=0&oh=09304a4c1ca686d0b690986fe7e29121&oe=5BD09DE0'
    sImage = 'https://scontent-cai1-1.xx.fbcdn.net/v/t1.0-9/36874243_111979996388951_5797416606409687040_n.jpg?_nc_cat=0&oh=835fe3c249949a229a7905758b717c2f&oe=5BE2F58E'
    noImage = 'http://skgulv.no/wp-content/uploads/2014/10/facebook-bruker.jpg'
    
    totalClass={}
    suc=true;
    fai=false;
    classFunction=function(){
        this.totalClass.success=this.suc;
        this.totalClass.fail=this.fai;
    }
    toggle=true;
    toggleFormat=()=>{this.toggle=!this.toggle;console.log(this.toggle)}
    birthDate=new Date(1981,0,25);
    long='EEEEdd-MMMM-yyyy';
    short='dd-MM-yy';
    
    getformat(){ return this.toggle ? this.short : this.long; }


    
    constructor() {
        this.persons = [
            { id: 1, name: 'Muhammad' },
            { id: 2 } as Person,
            { id: 3, name: 'Amir', age: 12 }
        ];

        this.classFunction();
    }
    ngOnInit() {
        this.kids = [
            { name: 'Muhammad', image: this.mImage },
            { name: 'Saad', image: this.sImage },
            { name: 'Ali', image: this.aImage },
            { name: 'Gehan' }
        ]

    }
}



