import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RepRoutingModule } from './rep-routing.module';
import { RepCreateComponent } from './rep-create/rep-create.component';
import { RepAllComponent } from './rep-all/rep-all.component';

@NgModule({
  imports: [
    CommonModule,
    RepRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RepCreateComponent, RepAllComponent]
})
export class RepModule { }
