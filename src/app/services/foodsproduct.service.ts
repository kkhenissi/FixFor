import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
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

    });
  }



  getProducts(): Observable<FoodProduct[]> {
        return this.http.get<FoodProduct[]>(`${environment.baseUrl}/foodproducts/`);
  }

  getProduct(key: string): Observable<FoodProduct> {
    return this.http.get<FoodProduct>(`${environment.baseUrl}/foodproducts/` + key);
  }

  uploadPhoto(fd: FormData): Observable<HttpEvent<{}>> {
   const foodProductId = fd.get('foodProductId');
   const file = fd.get('file');
   console.log('this.file+++++++++++ ==>', file);

   const req = new HttpRequest('POST', `${environment.springBaseUrl}/fooduploadphoto/${foodProductId}`, fd, {
     reportProgress: true,
     responseType: 'text'

   });
   return this.http.request(req);
  }

  saveProduct(formData: FormData): Observable<FoodProduct> {
    console.log('What id in formData =============>', formData.get('product'));
    console.log('What id in formData.file =============>', formData.get('file'));
    const headersOption = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post<FoodProduct>(`${environment.springBaseUrl}/fooditems/`, formData.get('product'), {headers: headersOption});
      // .subscribe((data) => {
      // this.http.post<FoodProduct>(`${environment.baseUrl}/foodproducts/`, product).subscribe((data) => {
      //   });
  }

  updateProduct(formData: FormData): Observable<FoodProduct> {
    const key = formData.get('productId');
    console.log('ggggggggg  key ==>', key);
    const headersOption = new HttpHeaders().set('Content-Type', 'application/json');
    return  this.http.put<FoodProduct>(`${environment.springBaseUrl}/fooditems/` + key , formData.get('product'), {headers: headersOption});
   //.subscribe((data) => {
   // this.http.post<FoodProduct>(`${environment.baseUrl}/foodproducts/`, product).subscribe((data) => {
   // });
  }
  updateProductStatus(formData: FormData): Observable<FoodProduct> {

    const key = formData.get('productId');
    console.log('ggggggggg  key ==>', key);
    const producthh = formData.get('product');
    console.log('ggggggggg producthh  key ==>', producthh);
    const headersOption = new HttpHeaders().set('Content-Type', 'application/json');

   return  this.http.put<FoodProduct>(`${environment.springBaseUrl}/fooditems/` + key , formData.get('product'), {headers: headersOption});
   alert('ok')
   //.subscribe((data) => {
   // this.http.post<FoodProduct>(`${environment.baseUrl}/foodproducts/`, product).subscribe((data) => {
   // });
  }
  deleteProduct(key: string): void {
    console.log('=======================> key', `${environment.springBaseUrl}/foodproducts/` + key)
    this.http.delete(`${environment.springBaseUrl}/foodproducts/` + key)
             .subscribe(res  => {
               console.log(res);
             });
  }

  }
