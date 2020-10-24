import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CartComponent } from 'src/app/cunsummer/cart/cart.component';
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
  constructor(private cartService: CartService,
              private dialog: MatDialog) {
    this.cart$ = this.cartService.cart$.subscribe(cart => this.cart = cart);
  }

  ngOnInit(): void {
  }
  toggleSideBare(): void{
        this.toggleSideBarForMe.emit();
        setTimeout(() => {
          window.dispatchEvent(
            new Event('resize')
          );
        }, 300);
  }

  openCart(): void {
    const dialogRef = this.dialog.open(CartComponent,
      { width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`ooooo>>Dialog result: ${result}`);
    });
  }
  onSignOut() {
    localStorage.setItem('token', null);
  }

}
