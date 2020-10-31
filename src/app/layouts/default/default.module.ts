import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CunsummerModule } from 'src/app/cunsummer/cunsummer.module';
import { LoginComponent } from 'src/app/defaultModule/login/login.component';
import { RegisterComponent } from 'src/app/defaultModule/register/register.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
// import { AddProductComponent } from 'src/app/modules/products/addProduct/addProduct.component';
// import { ProductListComponent } from 'src/app/modules/products/productList/productList.component';
import { SearchCreteriaComponent } from 'src/app/modules/searchCreteria/searchCreteria.component';
import { SellerModule } from 'src/app/seller/seller.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SellerModule,
    CunsummerModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
  ],
  declarations: [
    DefaultComponent,
    DashboardComponent,

  //  ProductListComponent,
    LoginComponent,
    RegisterComponent,
  //  AddProductComponent,
    SearchCreteriaComponent,
  ],

  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
