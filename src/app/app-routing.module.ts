import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './defaultModule/login/login.component';
import { RegisterComponent } from './defaultModule/register/register.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { FixgameComponent } from './shared/fixgame/fixgame.component';

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
        path: 'fixgame',
        component: FixgameComponent
      },
      {
        path: '404',
        component: NotFoundComponent
      },
      // {
      //   path: 'products',
      //   component: ProductListComponent,
      //   //     children: [
      //   //       {
      //   //         path: ':id',
      //   //         component: ProductDetailsComponent
      //   //       },
      //   // ],
      // },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'seller',
        loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule)
    },

  {
    path: 'cunsummer',
    loadChildren: () => import('./cunsummer/cunsummer.module').then(m => m.CunsummerModule)
},
      {
        path: '**',
        component: NotFoundComponent
      },
  ],

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
