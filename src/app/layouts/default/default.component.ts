import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;
  constructor() { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;

  }

}
