import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-addProduct',
  templateUrl: './addProduct.component.html',
  styleUrls: ['./addProduct.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }
  onClear() {
    this.productService.form.reset();
    this.productService.initializeFormGroup();
  }
  onSubmit() {
    console.log(this.productService.form.value);
    if (this.productService.form.valid ) {
      this.productService.saveProduct(this.productService.form.value);
     // this.productService.form.reset();

    }
  }

}
