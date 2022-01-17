import { Gallery } from './../../models/shared';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgs-gallery',
  templateUrl: './imgs-gallery.component.html',
  styleUrls: ['./imgs-gallery.component.scss']
})
export class ImgsGalleryComponent implements OnInit {

  @Input() public gallery!: Gallery;
  
  constructor() { }

  ngOnInit(): void {
  }

}
