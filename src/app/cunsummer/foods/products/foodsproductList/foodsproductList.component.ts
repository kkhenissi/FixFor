import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { FoodProduct } from 'src/app/models/FoodProductModel';
import { CartService } from 'src/app/services/cart.service';
import { FoodsProductService } from 'src/app/services/foodsproduct.service';
import { SharedService } from 'src/app/shared/shared.service';



@Component({
  selector: 'app-product',
  templateUrl: './foodsproductList.component.html',
  styleUrls: ['./foodsproductList.component.scss']
})
export class FoodsProductListComponent implements OnInit, AfterViewInit, OnDestroy {
  products: FoodProduct[] = [];
  products$: Observable<FoodProduct[]>;
  cart$: Observable<any>;
  cart;
  private mediaSub: Subscription;
  constructor(
    private foodProductService: FoodsProductService,
    private cartService: CartService,
    private titleService: Title,
    private sharedService: SharedService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver ) {
      this.cart$ = this.cartService.cart$.subscribe(cart => this.cart = cart);
     }

  ngOnInit(): void {
      this.getProducts();
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
 }

  getProducts(): void {
    this.foodProductService.getProducts()
          .subscribe(data => {

           this.products = data['products'];
           console.log('============== data =>', this.products);
           if (this.products !== undefined) {
            this.products$ = of(this.products);
           }



         //  this.titleService.setTitle(`${this.sharedService.playTitle}`);
         }, err => {
            if (err instanceof HttpErrorResponse ) {
              if (err.status === 401) {
                  this.router.navigate(['/login']);
              }
            }
         });
  }

  onAddProduct(count, product) {
    this.cartService.addToCart(count, product);
  }
  redirectToSaler(prd) {

    window.location.href = prd.linkProduct + '?' + prd.linkProduct;
   //  setInterval(function(){ alert("Votre code: XDSSHXRE"); }, 5000);

  }
  ngOnDestroy(): void {
    if (this.mediaSub) {
      this.mediaSub.unsubscribe();
    }
  }



}
