import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoreographiesRoutingModule } from './choreographies-routing.module';
import { ChoreographiesContentComponent } from './components/choreographies-content/choreographies-content.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ChoreographiesContentComponent
  ],
  imports: [
    CommonModule,
    ChoreographiesRoutingModule,
    SharedModule
  ]
})
export class ChoreographiesModule { }
