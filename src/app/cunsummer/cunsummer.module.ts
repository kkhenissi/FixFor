import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SellerComponent } from '../seller/seller/seller.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { CunsummerRoutingModule } from './cunsummer-routing.module';
import { CunsummerComponent } from './cunsummer/cunsummer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EcomrcComponent } from './ecomrc/ecomrc.component';
import { ProductListComponent } from './ecomrc/products/productList/productList.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodsProductListComponent } from './foods/products/foodsproductList/foodsproductList.component';
import { SelectToBuyComponentCuns } from './foods/select-to-buy/select-to-buy.component';





@NgModule({
  declarations: [CunsummerComponent,
                 SellerComponent,
                 EcomrcComponent,
                 FoodsComponent,
                 DashboardComponent,
                 ProductListComponent,
                 FoodsProductListComponent,
                 SelectToBuyComponentCuns,
                 CartComponent],
  imports: [
    CommonModule,
    CunsummerRoutingModule,
    SharedModule,
    MaterialModule
  ],

})
export class CunsummerModule { }
