import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FoodProduct } from 'src/app/models/FoodProductModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodsProductService {
  products: Observable<FoodProduct[]>;

  constructor(private http: HttpClient) { }

   form: FormGroup = new FormGroup({
      id: new FormControl(null),
      designation : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
  //    category: new FormControl('', Validators.required),
      imageUrl : new FormControl('', [Validators.required]),
  //    logoSaler : new FormControl('', [Validators.required]),
  //    linkProduct : new FormControl('', Validators.required),
  //    productSold : new FormControl(0, Validators.required),
  //    productLocked : new FormControl(false),
      price: new FormControl(0),
  //    currentPrice: new FormControl(0),
  //    saledate: new FormControl(''),
    //  dateOfSale: new FormControl('')
   });

   initializeFormGroup() {
    this.form.setValue({
      id: null,
      designation : '',
      description : '',
    //  category: '',
      imageUrl : '',
      // logoSaler : '',
      // linkProduct : '',
      // productSold : 0,
      // productLocked : false,
      price: 0,
    //  currentPrice: 0,
    //  saledate: '',
    //  dateOfSale: ''

    })
  }



  getProducts(): Observable<FoodProduct[]> {
        return this.http.get<FoodProduct[]>(`${environment.baseUrl}/foodproducts/`);
  }

  getProduct(key: string): Observable<FoodProduct> {
    return this.http.get<FoodProduct>(`${environment.baseUrl}/foodproducts/` + key);
  }

  saveProduct(product: FoodProduct): void {
    this.http.post<FoodProduct>(`${environment.springBaseUrl}/fooditems/`, product).subscribe((data) => {
   // this.http.post<FoodProduct>(`${environment.baseUrl}/foodproducts/`, product).subscribe((data) => {
    });
  }
  // saveUser(user: any): Observable<Product> {
  //   return this.http.post<Product>(`${environment.baseUrl}/userss/`, user);
  // }

  }
