import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class FoodsComponent implements OnInit, AfterViewChecked {
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
              private cdRef: ChangeDetectorRef
              // @Inject(MAT_DIALOG_DATA) public data,
             ) { }



  ngOnInit(): void {
    this.host = environment.springBaseUrl;
    this.foodsProductService.getProducts().subscribe(
        response => this.handeleSuccessfulResponse(response),
    );
  }
  ngAfterViewChecked() {
     this.cdRef.detectChanges();
  }

  handeleSuccessfulResponse(response) {

    this.foodsProduct = response['products'];
    console.log(this.foodsProduct);
   // this.cdRef.detectChanges();
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

    console.log('===> product in changeStatus ==>', product);
    const formData = new FormData();
    // const product = this.foodsproductService.form.value;
    // product.id = id;
    // formData.append('product', JSON.stringify(product));
    formData.append('productId', product._id);
    // formData.append('file', this.selectedFile);
    // this.foodsproductService.updateProduct(formData)
    console.log(' what is in product ==>', product._id);
    if (envente._checked) {
      product.active = false;
    } else {
      product.active = true;
    }
    formData.append('product', JSON.stringify(product));
    this.foodsProductService.updateProduct(formData).subscribe((data) => {
       console.log('ddddddddddddddddaaaatttaaa============>', data)
    })
   // this.cdRef.detectChanges();
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



