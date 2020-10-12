import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './defaultModule/login/login.component';
import { PlayersComponent } from './defaultModule/players/players.component';
import { RegisterComponent } from './defaultModule/register/register.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ProductDetailsComponent } from './modules/products/productDetails/productDetails.component';
import { ProductListComponent } from './modules/products/productList.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'players',
        component: PlayersComponent
      },
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: 'products',
        component: ProductListComponent,
        //     children: [
        //       {
        //         path: ':id',
        //         component: ProductDetailsComponent
        //       },
        // ],
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },
  ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
