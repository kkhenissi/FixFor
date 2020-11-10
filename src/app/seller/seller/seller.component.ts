import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/userModel';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  sellers: UserModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
