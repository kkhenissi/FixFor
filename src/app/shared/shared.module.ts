import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { CartComponent } from '../cunsummer/cart/cart.component';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FixgameComponent } from './fixgame/fixgame.component';
import { SubTotalPipe } from './sub-total.pipe';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    NotFoundComponent,
    FixgameComponent,
    SubTotalPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MaterialModule,


    // MatMenuModule,
    // MatListModule,
    // MatCardModule,
    // MatDividerModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatBadgeModule,
    // MatButtonModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    NotFoundComponent,
    SubTotalPipe

  ],
  entryComponents: [CartComponent]
})
export class SharedModule { }
