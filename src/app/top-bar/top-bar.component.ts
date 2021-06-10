import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  loc: string;
  cities= [
    {
      id: 1,
      name:'London'
    },
    {
      id: 2,
      name:'UK'
    },
    {
      id: 3,
      name:'India'
    }
  ];
  constructor() { }
  ngOnInit() {

  }
  

  
}
