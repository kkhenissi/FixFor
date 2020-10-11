import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './mockProducts';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Observable<Product[]>;

constructor(private http: HttpClient) { }

getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>("http://localhost:5000/api/v1/product/");
}

getProduct(key: string): Observable<Product> {
  return this.http.get<Product>("http://localhost:5000/api/v1/product/"+key);
}

saveProduct(product: Product): Observable<Product> {
  return this.http.post<Product>("http://localhost:5000/api/v1/product/", product);
}
saveUser(user: any): Observable<Product> {
  return this.http.post<Product>("http://localhost:5000/users/", user);
}

}
