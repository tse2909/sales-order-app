import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralRoutingModule } from "./general-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { CustomerModule } from '../customer/customer.module';
import { ItemModule } from '../item/item.module';
import { RepModule } from '../rep/rep.module';
import { ShipModule } from '../ship/ship.module';
import { OrderModule } from '../order/order.module';

import { CustomerService } from './providers/customer.service';
import { ItemService } from './providers/item.service';
import { RepService } from './providers/rep.service';
import { ShipMethodService } from './providers/shipMethod.service';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutingModule,
    CustomerModule,
    ItemModule,
    RepModule,
    ShipModule,
    OrderModule
  ],
  declarations: [
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    CustomerService, ItemService, RepService, ShipMethodService
  ]
})
export class GeneralModule { }
