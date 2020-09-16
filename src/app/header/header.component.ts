import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  displayPosition: boolean;

    position: string;
  constructor() { }

  ngOnInit() {

  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
}
}
