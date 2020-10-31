import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-to-buy',
  templateUrl: './select-to-buy.component.html',
  styleUrls: ['./select-to-buy.component.scss']
})
export class SelectToBuyComponentCuns implements OnInit {
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
