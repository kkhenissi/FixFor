import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { FoodProduct } from 'src/app/models/FoodProductModel';
import { FoodsProductService } from 'src/app/services/foodsproduct.service';
import { environment } from 'src/environments/environment';
import { AddFoodComponent } from './add-food/add-food.component';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss']
})
export class FoodsComponent implements OnInit {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  foodsProduct: Array<FoodProduct> = [];


  selectedFoodProduct: FoodProduct;
  action: string;
  host: string;
  choixmenu: string;




  constructor(private foodsProductService: FoodsProductService,
              private dialog: MatDialog,
              // @Inject(MAT_DIALOG_DATA) public data,
             ) { }



  ngOnInit(): void {
    this.host = environment.springBaseUrl;
    this.foodsProductService.getProducts().subscribe(
        response => this.handeleSuccessfulResponse(response),
    );
  }

  handeleSuccessfulResponse(response) {

    this.foodsProduct = response['products'];
    console.log(this.foodsProduct);
  }

  addFoodProduct(): void {
    this.selectedFoodProduct = new FoodProduct();
    this.choixmenu = 'Add';
    const matDialogRef = this.dialog.open(AddFoodComponent,
      {
        width: '500px',
        data: {choixmenu: 'Add'}
    });

    matDialogRef.afterClosed().subscribe(result => {
      console.log(`ooooo>>Dialog result: ${result}`);
    });

  }
  deleteFoodProduct(product) {
    console.log('===> product', product);
    this.foodsProductService.deleteProduct(product._id);
  }
  changeStatus(envente, product) {
    console.log(' what is in product ==>', product._id);
    if (envente._checked) {
      product.active = false;
    } else {
      product.active = true;
    }
       this.foodsProductService.updateProduct(product);

  }
  onUpdateFoodProduct(p) {
    this.selectedFoodProduct = p;
    const matDialogRef = this.dialog.open(AddFoodComponent,
      { width: '500px',
      data: {choixmenu: 'Update',
      item: this.selectedFoodProduct}
    });

    matDialogRef.afterClosed().subscribe(result => {
      console.log(`ooooo>>Dialog result: ${result}`);
    });


  }
}



