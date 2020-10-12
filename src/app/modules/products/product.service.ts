import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PRODUCTS } from './mockProducts';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Observable<Product[]>;

constructor(private http: HttpClient) { }

getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(`${environment.baseUrl}/products/`);
}

getProduct(key: string): Observable<Product> {
  return this.http.get<Product>(`${environment.baseUrl}/products/` + key);
}

saveProduct(product: Product): Observable<Product> {
  return this.http.post<Product>(`${environment.baseUrl}/products/`, product);
}
saveUser(user: any): Observable<Product> {
  return this.http.post<Product>(`${environment.baseUrl}/userss/`, user);
}

}
