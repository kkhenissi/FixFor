
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodProduct } from 'src/app/models/FoodProductModel';
import { FoodsProductService } from 'src/app/services/foodsproduct.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})
export class AddFoodComponent implements OnInit {

 selectedFile: File = null;
 message: string = '';
 imagePath: any;
 imageUrl: any;
 choixmenu: string;
 host: string;
 selectedFoodProduct: FoodProduct;
 willUpdateImage: boolean;
 namePhotoSelectedFoodProduct: string;
  constructor(public foodsproductService: FoodsProductService,
              private http: HttpClient,
              public dialogRef: MatDialogRef<AddFoodComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
                this.choixmenu = data.choixmenu;
                this.selectedFoodProduct = data.item;
              }

  ngOnInit() {
    this.host = environment.springBaseUrl;

    // this.foodsproductService.currentFoodProduct$.subscribe(data => {
    //   this.selectedFoodProduct = data;
    //   console.log('hhhhh==>', this.selectedFoodProduct);
    // })
    this.foodsproductService.form.get(['designation']).setValue(this.selectedFoodProduct.designation);
    this.foodsproductService.form.get(['description']).setValue(this.selectedFoodProduct.description);
    this.foodsproductService.form.get(['price']).setValue(this.selectedFoodProduct.price);
    this.foodsproductService.form.get(['imageUrl']).setValue(this.selectedFoodProduct.imageUrl);
  }
  onClear() {
    this.foodsproductService.form.reset();
    this.foodsproductService.initializeFormGroup();
  }


  onSubmit() {
  //   console.log(this.foodsproductService.form.value);
  //   if (this.foodsproductService.form.valid ) {
  //       this.foodsproductService.saveProduct(this.foodsproductService.form.value);
  //       this.foodsproductService.form.reset();

  //   }
   if (this.choixmenu === 'Add') {
     this.addData();
     setTimeout(() => {
      this.onUploadFoofPhoto(this.namePhotoSelectedFoodProduct);
     }, 3000);

   } else {
    this.updateData(this.selectedFoodProduct._id);
    if (this.willUpdateImage) {
        this.onUploadFoofPhoto(this.selectedFoodProduct._id);
        this.willUpdateImage = false;
    }
   }


   }

   addData() {
     const formData = new FormData();
     const product = this.foodsproductService.form.value;
     formData.append('product', JSON.stringify(product));
     formData.append('file', this.selectedFile);
     this.foodsproductService.saveProduct(formData)
       .subscribe( data => {
         console.log(data);
         this.namePhotoSelectedFoodProduct = data.id;
         console.log('this.namePhotoSelectedFoodProduct ==>', this.namePhotoSelectedFoodProduct)
       });


   }

   updateData(id) {
    const formData = new FormData();
    const product = this.foodsproductService.form.value;
    product.id = id;
    formData.append('product', JSON.stringify(product));
    formData.append('productId', id);
    formData.append('file', this.selectedFile);
    this.foodsproductService.updateProduct(formData)
    .subscribe( data => {
      console.log(data);
    //  this.namePhotoSelectedFoodProduct=data.id;
   //   console.log('this.namePhotoSelectedFoodProduct ==>', this.namePhotoSelectedFoodProduct)
    });


   }






  onSelectedFile(event) {
    if (event.target.files.length > 0) {


      this.selectedFile = <File>event.target.files[0];
      console.log('6666666666666666====>',this.selectedFile)
      let mimeType = this.selectedFile.type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only supported images !"

        return;
      }
      this.willUpdateImage = true;
      let reader = new FileReader();
      this.imagePath = this.selectedFile;
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (_event) => {
        this.imageUrl = reader.result;
        console.log('this.message====>', this.imageUrl);
      };


    }

  }

  onUploadFoofPhoto(foodProductId) {
    console.log('rrrrrrrrrrrr==>', foodProductId)
    const fd = new FormData();
    fd.append('file', this.selectedFile);
    fd.append('foodProductId', foodProductId);
    this.foodsproductService.uploadPhoto(fd).subscribe(event => {
              if (event.type === HttpEventType.UploadProgress) {
                console.log('Upload Progress '+ Math.round(event.loaded / event.total) * 100 + '%');
              } else if (event.type === HttpEventType.Response) {
               console.log(event);
              }

            });


    // this.http.post('http://localhost:8086/foodItems', fd, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    //      .subscribe(event => {
    //        if (event.type === HttpEventType.UploadProgress) {
    //          console.log('Upload Progress '+ Math.round(event.loaded / event.total) * 100 + '%');
    //        } else if (event.type === HttpEventType.Response) {
    //         console.log(event);
    //        }

    //      });
  }

}

