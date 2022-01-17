import { Img } from './../../../../core/models/core';
import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/shared/models/shared';

@Component({
  selector: 'app-dancers-content',
  templateUrl: './dancers-content.component.html',
  styleUrls: ['./dancers-content.component.scss']
})
export class DancersContentComponent implements OnInit {

  public gallery: Gallery;
  constructor() {

    this.gallery = {
      title: 'Galeria de bailarinas',
      imgs: [
        {
          src: 'patata',
          alt: 'patata'
        },
        {
          src: 'patata',
          alt: 'patata'
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}
