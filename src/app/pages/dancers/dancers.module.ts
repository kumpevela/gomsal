import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DancersRoutingModule } from './dancers-routing.module';
import { DancersContentComponent } from './components/dancers-content/dancers-content.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DancersContentComponent
  ],
  imports: [
    CommonModule,
    DancersRoutingModule, 
    SharedModule
  ]
})
export class DancersModule { }
