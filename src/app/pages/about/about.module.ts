import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AboutRoutingModule } from './about-routing.module';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { FormContactComponent } from './components/about-content/form-contact/form-contact.component';



@NgModule({
  declarations: [
    AboutContentComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule
  ]
})
export class AboutModule { }
