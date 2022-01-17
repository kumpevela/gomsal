import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgsGalleryComponent } from './components/imgs-gallery/imgs-gallery.component';



@NgModule({
  declarations: [
    ImgsGalleryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ImgsGalleryComponent]
})
export class SharedModule { }
