import { Gallery } from 'src/app/shared/models/shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choreographies-content',
  templateUrl: './choreographies-content.component.html',
  styleUrls: ['./choreographies-content.component.scss']
})
export class ChoreographiesContentComponent implements OnInit {

  public gallery: Gallery
  constructor() { 
    this.gallery = {
      title: 'Galeria de conciertos',
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
