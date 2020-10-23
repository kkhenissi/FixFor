import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any = {};
  cart$;

  constructor() {
    this.cart.cartTotal = 0;
    this.cart$ = new BehaviorSubject(this.cart);
  }

  addToCart(count, product): void {
    console.log('+++++++product+++++>', product);
    console.log('++++++++$event.value++++>', count);
    if (count === 0) {
      console.log('tes its vaue is 000', product);
      delete this.cart[product._id];
      this.cart = {
        ...this.cart,
         [product._id]: {
        ...product,
        count,
         }
        };
      } else {
      this.cart = {
      ...this.cart,
       [product._id]: {
      ...product,
      count,
       }
      };
     }
    this.cart.cartTotal = 0;
    Object.values(this.cart)
      .filter(x => typeof x === 'object')
      .forEach((p: any) => this.cart.cartTotal = this.cart.cartTotal + p.count);
      console.log('*************==>',this.cart.cartTotal)
    this.cart$.next(this.cart);
    }
}
