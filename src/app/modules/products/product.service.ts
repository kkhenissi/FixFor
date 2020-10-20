import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PRODUCTS } from './mockProducts';
import { Product } from '../../models/ProductModel';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
products: Observable<Product[]>;

constructor(private http: HttpClient) { }

 form: FormGroup = new FormGroup({
    id: new FormControl(null),
    designation : new FormControl('', Validators.required),
    description : new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    imageUrl : new FormControl('', [Validators.required]),
    logoSaler : new FormControl('', [Validators.required]),
    linkProduct : new FormControl('', Validators.required),
    productSold : new FormControl(0, Validators.required),
    productLocked : new FormControl(false),
    initialPrice: new FormControl(0),
    currentPrice: new FormControl(0),
    saledate: new FormControl(''),
  //  dateOfSale: new FormControl('')
 });

 initializeFormGroup() {
  this.form.setValue({
    id: null,
    designation : '',
    description : '',
    category: '',
    imageUrl : '',
    logoSaler : '',
    linkProduct : '',
    productSold : 0,
    productLocked : false,
    initialPrice: 0,
    currentPrice: 0,
    saledate: '',
  //  dateOfSale: ''

  })
}



getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(`${environment.baseUrl}/products/`);
}

getProduct(key: string): Observable<Product> {
  return this.http.get<Product>(`${environment.baseUrl}/products/` + key);
}

saveProduct(product: Product): void {
  console.log("zzzzzzzzzzzzzzzzzzzzzzz",product)
  this.http.post<Product>(`${environment.baseUrl}/products/`, product).subscribe((data) => {
    
  });
}
// saveUser(user: any): Observable<Product> {
//   return this.http.post<Product>(`${environment.baseUrl}/userss/`, user);
// }

}
