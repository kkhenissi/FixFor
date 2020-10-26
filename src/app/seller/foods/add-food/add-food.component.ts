
  import { Component, OnInit } from '@angular/core';
import { FoodsProductService } from 'src/app/services/foodsproduct.service';

  @Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {


  constructor(public foodsproductService: FoodsProductService) { }

  ngOnInit() {
  }
  onClear() {
    this.foodsproductService.form.reset();
    this.foodsproductService.initializeFormGroup();
  }
  onSubmit() {
    console.log(this.foodsproductService.form.value);
    if (this.foodsproductService.form.valid ) {
      this.foodsproductService.saveProduct(this.foodsproductService.form.value);
      this.foodsproductService.form.reset();

    }
  }

}

