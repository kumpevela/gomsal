import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { HeroComponent } from './components/home-content/hero/hero.component';
import { DncComponent } from './components/home-content/dnc/dnc.component';
import { ShowComponent } from './components/home-content/show/show.component';


@NgModule({
  declarations: [
    HomeContentComponent,
    HeroComponent,
    DncComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
