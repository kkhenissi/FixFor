import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { FoodProduct } from 'src/app/models/FoodProductModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodsProductService {
  products: Observable<FoodProduct[]>;
  public currentFoodProduct$ = new BehaviorSubject<FoodProduct>(null) as Observable<FoodProduct>;


  constructor(private http: HttpClient) { }

   form: FormGroup = new FormGroup({
      id: new FormControl(null),
      designation : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
      imageUrl : new FormControl(''),
      active : new FormControl(false),
      price: new FormControl(0),

   });

   initializeFormGroup() {
    this.form.setValue({
      id: null,
      designation : '',
      description : '',
      active: false,
      imageUrl : '',
      price: 0,

    })
  }



  getProducts(): Observable<FoodProduct[]> {
        return this.http.get<FoodProduct[]>(`${environment.baseUrl}/foodproducts/`);
  }

  getProduct(key: string): Observable<FoodProduct> {
    return this.http.get<FoodProduct>(`${environment.baseUrl}/foodproducts/` + key);
  }

  saveProduct(formData: FormData): Observable<FoodProduct> {
   return this.http.post<FoodProduct>(`${environment.springBaseUrl}/fooditems/`, formData);


      // .subscribe((data) => {
      // this.http.post<FoodProduct>(`${environment.baseUrl}/foodproducts/`, product).subscribe((data) => {
      //   });
  }

  updateProduct(product: any): void {
    console.log('ggggggggg', product._id);
    const key = product._id;
    this.http.put<FoodProduct>(`${environment.springBaseUrl}/fooditems/` + key , product).subscribe((data) => {
   // this.http.post<FoodProduct>(`${environment.baseUrl}/foodproducts/`, product).subscribe((data) => {
    });
  }
  deleteProduct(key: string): void {
    console.log('=======================> key', `${environment.springBaseUrl}/foodproducts/` + key)
    this.http.delete(`${environment.springBaseUrl}/foodproducts/` + key)
             .subscribe(res  => {
               console.log(res);
             });
  }

  }
