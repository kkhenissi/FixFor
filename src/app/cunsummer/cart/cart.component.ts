import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$;
  constructor(private cartService: CartService) {
     this.cart$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

  getValues(obj): any {
    return Object.values(obj)
                 .filter(x => typeof x === 'object');
  }

  onSelectionChange($event, product): void {
    console.log('+++++++product+++++>', product);
    console.log('++++++++$event.value++++>', $event.value);
    product.count = $event.value;
    this.cartService.addToCart($event.value, product);
  }
}
