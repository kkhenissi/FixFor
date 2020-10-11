import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { PRODUCTS } from './mockProducts';
import { Product } from './Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService: ProductService,
    private titleService: Title,
    private sharedService: SharedService,
    private router: Router ) { }

  ngOnInit(): void {
      this.getProducts();
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



}
