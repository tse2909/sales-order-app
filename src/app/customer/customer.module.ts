import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerAllComponent, CustomerCreateComponent } from '../customer';
import { CustomerRoutingModule } from './customer-routing.module';
@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerAllComponent, CustomerCreateComponent]
})
export class CustomerModule { }
