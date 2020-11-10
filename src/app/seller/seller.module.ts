import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DashboadComponent } from './dashboad/dashboad.component';
import { EcomrcComponent } from './ecomrc/ecomrc.component';
import { FixgameComponent } from './fixgame/fixgame.component';
import { AddFoodComponent } from './foods/add-food/add-food.component';
import { EditFoodComponent } from './foods/edit-food/edit-food.component';
import { FoodsComponent } from './foods/foods.component';
import { ToggleAdminComponent } from './foods/toggle-admin/toggle-admin.component';
import { SellerRoutingModule } from './seller-routing.module';





@NgModule({
  declarations: [DashboadComponent, FixgameComponent,
                 FoodsComponent, EcomrcComponent,
                 AddFoodComponent, EditFoodComponent,
                 ToggleAdminComponent],
  imports: [
    CommonModule,
    SellerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule

  ]
})
export class SellerModule { }
