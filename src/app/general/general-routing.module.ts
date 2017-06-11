import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAllComponent, CustomerCreateComponent } from '../customer';
import { ItemAllComponent, ItemCreateComponent } from '../item';
import { RepAllComponent, RepCreateComponent } from '../rep';
import { ShipAllComponent, ShipCreateComponent } from '../ship';
import { OrderAllComponent, OrderCreateComponent } from '../order';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'customer/all',
    pathMatch: 'full'
  },
  {
    path: 'customer/all',
    component: CustomerAllComponent
  },
  {
    path: 'customer/create',
    component: CustomerCreateComponent
  },
  {
    path: 'item/all',
    component: ItemAllComponent
  },
  {
    path: 'item/create',
    component: ItemCreateComponent
  },
  {
    path: 'rep/all',
    component: RepAllComponent
  },
  {
    path: 'rep/create',
    component: RepCreateComponent
  },
  {
    path: 'shipMethod/all',
    component: ShipAllComponent
  },
  {
    path: 'shipMethod/create',
    component: ShipCreateComponent
  },
  {
    path: 'order/all',
    component: OrderAllComponent
  },
  {
    path: 'order/create',
    component: OrderCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule { }
