import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShipRoutingModule } from './ship-routing.module';
import { ShipAllComponent } from './ship-all/ship-all.component';
import { ShipCreateComponent } from './ship-create/ship-create.component';

@NgModule({
  imports: [
    CommonModule,
    ShipRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ShipAllComponent, ShipCreateComponent]
})
export class ShipModule { }
