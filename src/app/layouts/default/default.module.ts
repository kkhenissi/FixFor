import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LockToBuyComponent } from 'src/app/defaultModule/lock-to-buy/lock-to-buy.component';
import { LoginComponent } from 'src/app/defaultModule/login/login.component';
import { RegisterComponent } from 'src/app/defaultModule/register/register.component';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { AddProductComponent } from 'src/app/modules/products/addProduct/addProduct.component';
import { ProductListComponent } from 'src/app/modules/products/productList/productList.component';
import { SearchCreteriaComponent } from 'src/app/modules/searchCreteria/searchCreteria.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './default.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatAutocompleteModule,
    FormsModule,
    MatIconModule

  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatAutocompleteModule

  ],
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ProductListComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    SearchCreteriaComponent,
    LockToBuyComponent

  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
