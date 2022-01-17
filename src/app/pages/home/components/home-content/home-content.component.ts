import { HomeComponent } from './../../models/home';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  public hero: HomeComponent;
  public dnc: HomeComponent;
  public show: HomeComponent;

  constructor() { 
    this.hero = {
      title: 'Gomsal', 
      img: {
        src: '../../../assets/images/bailarina.png',
        alt: 'Gomsal'
      }, 
      titleDescription: 'Amor al arte del baile',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
    this.dnc = {
      title: 'Nuestras bailarinas', 
      img: {
        src: '../../../assets/images/bailarina.png',
        alt: 'Bailarinas'
      }, 
      titleDescription: 'Somos bailarinas',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
    this.show = {
      title: 'Proximos conciertos', 
      img: {
        src: '../../../assets/images/bailarina.png',
        alt: 'Espectaculos'
      }, 
      titleDescription: 'Nuestros temas musicales',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  }

  ngOnInit(): void {
  }

}
