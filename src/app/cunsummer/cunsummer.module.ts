import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { CunsummerRoutingModule } from './cunsummer-routing.module';
import { CunsummerComponent } from './cunsummer/cunsummer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EcomrcComponent } from './ecomrc/ecomrc.component';
import { ProductListComponent } from './ecomrc/products/productList/productList.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodsProductListComponent } from './foods/products/foodsproductList/foodsproductList.component';
import { LockToBuyComponentCuns } from './lock-to-buy/lock-to-buy.component';



@NgModule({
  declarations: [CunsummerComponent,
                 EcomrcComponent,
                 FoodsComponent,
                 DashboardComponent,
                 ProductListComponent,
                 FoodsProductListComponent,
                 LockToBuyComponentCuns],
  imports: [
    CommonModule,
    CunsummerRoutingModule,
    MaterialModule
  ]
})
export class CunsummerModule { }