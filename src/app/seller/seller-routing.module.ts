import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcomrcComponent } from './ecomrc/ecomrc.component';
import { FixgameComponent } from './fixgame/fixgame.component';
import { FoodsComponent } from './foods/foods.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  {
    path: '',
    component: SellerComponent
  },
  {
    path: 'fixgame',
    component: FixgameComponent
  },
  {
    path: 'foods',
    component: FoodsComponent
  },
  {
    path: 'ecommerces',
    component: EcomrcComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
