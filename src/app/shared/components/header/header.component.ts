import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  cart: any = {};
  cart$: Observable<any>;
  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.cart$.subscribe(cart => this.cart = cart);
  }

  ngOnInit(): void {
  }
  toggleSideBare(){
        this.toggleSideBarForMe.emit();
        setTimeout(() => {
          window.dispatchEvent(
            new Event('resize')
          );
        }, 300);
  }

}
