import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SellerRoutingModule } from './seller-routing.module';
import { DashboadComponent } from './dashboad/dashboad.component';
import { FixgameComponent } from './fixgame/fixgame.component';
import { FoodsComponent } from './foods/foods.component';
import { EcomrcComponent } from './ecomrc/ecomrc.component';




@NgModule({
  declarations: [DashboadComponent, FixgameComponent, FoodsComponent, EcomrcComponent],
  imports: [
    CommonModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
