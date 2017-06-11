import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemRoutingModule } from './item-routing.module';
import { ItemAllComponent, ItemCreateComponent } from '../item';

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ItemAllComponent, ItemCreateComponent]
})
export class ItemModule { }
