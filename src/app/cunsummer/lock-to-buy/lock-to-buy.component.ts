import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lock-to-buy-ecom',
  templateUrl: './lock-to-buy.component.html',
  styleUrls: ['./lock-to-buy.component.scss']
})
export class LockToBuyComponentCuns implements OnInit {
  @Input() count = 0;
  @Output() updateCount = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.count++;
    this.updateCount.emit(this.count);

  }
  remove() {
    this.count--;
    this.updateCount.emit(this.count);
  }
}
