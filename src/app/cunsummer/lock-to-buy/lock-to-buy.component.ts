import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lock-to-buy-ecom',
  templateUrl: './lock-to-buy.component.html',
  styleUrls: ['./lock-to-buy.component.scss']
})
export class LockToBuyComponentCuns implements OnInit {
  @Input() count = 0;
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.count++;
    // this.updateCount.emit(this.count);

  }
  remove() {
    this.count--;
    // this.updateCount.emit(this.count);
  }
}
