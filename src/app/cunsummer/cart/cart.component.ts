import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart$;
  constructor(private cartService: CartService,
              private authService: AuthService) {
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
  sendOrder() {
    console.log( '*******>>', this.authService.currentUser);
    console.log( '*******>>', this.cartService.cart);
  }
}
