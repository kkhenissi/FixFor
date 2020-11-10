import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  getSellers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.baseUrl}/products/`);
}
}
