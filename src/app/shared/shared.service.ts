import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
playTitle = "My fixFor play";
baseUrl = "http://localhost:4200";
constructor() { }

}
