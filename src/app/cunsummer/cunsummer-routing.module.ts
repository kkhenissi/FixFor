import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixgameComponent } from '../seller/fixgame/fixgame.component';
import { CunsummerComponent } from './cunsummer/cunsummer.component';
import { EcomrcComponent } from './ecomrc/ecomrc.component';
import { FoodsComponent } from './foods/foods.component';

const routes: Routes = [
  {
    path: '',
    component: CunsummerComponent
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
export class CunsummerRoutingModule { }
