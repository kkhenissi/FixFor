import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBarOpen = true;


  
  constructor(

  ) { }



  // tslint:disable-next-line: typedef
  ngOnInit() {
  }
  sideBarToggler(): void {
    this.sideBarOpen = !this.sideBarOpen;

  }

 

}
