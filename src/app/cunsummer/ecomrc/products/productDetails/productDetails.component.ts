import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { Product } from '../../../../models/ProductModel';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-productDetails',
  templateUrl: './productDetails.component.html',
  styleUrls: ['./productDetails.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();
  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private titleService: Title,
              private sharedService: SharedService,
              private meta: Meta ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key = params.key;
      this.getProduct(key);

    })
  }

  getProduct(key: string) {
     this.productService.getProduct(key)
         .subscribe(data => {
           if (data === undefined ) {
              this.router.navigateByUrl('404');
              return;
           }
           this.product = data;
           this.titleService.setTitle(`${this.product.designation} - ${this.sharedService.playTitle}`);
           this.meta.addTags([
             {name: 'description', content: this.product.description},
             {property: 'og:title', content: (`${this.product.designation} - ${this.sharedService.playTitle}`)},
             {property: 'og:type', content: "website"},
             {property: 'og:url', content: this.sharedService.baseUrl + this.product.key},
             {property: 'og:image', content: this.product.imageUrl},
             {property: 'og:site_name', content: this.sharedService.playTitle},
           ])
         });

  }

}
