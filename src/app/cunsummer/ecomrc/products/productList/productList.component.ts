import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Product } from '../../../../models/ProductModel';
import { ProductService } from '../../../../services/product.service';


@Component({
  selector: 'app-product-ecom',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit, OnDestroy {
  products: Product[] = [];
  private mediaSub: Subscription;
  constructor(
    private productService: ProductService,
    private titleService: Title,
    private sharedService: SharedService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    private mediaObserver: MediaObserver ) { }

  ngOnInit(): void {
      this.getProducts();
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
 }

  getProducts(): void {
     this.productService.getProducts()
         .subscribe(data => {
          console.log('============== data =>', data);
           this.products = data['products'];

         //  this.titleService.setTitle(`${this.sharedService.playTitle}`);
         }, err => {
            if (err instanceof HttpErrorResponse ) {
              if (err.status === 401) {
                  this.router.navigate(['/login']);
              }
            }
         });
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
