import { Component, OnInit } from '@angular/core';
// import {CommonHeaderComponent} from './dashboard/dashboard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hero = 'Windstorm';
  constructor() { }

  ngOnInit() {
    
  }

}
