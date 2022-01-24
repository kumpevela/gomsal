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
      description: 'El baile es un arte donde se utiliza el movimiento del cuerpo, omo una forma de expresión y de interacción social con fines de entretenimiento, artísticos y reproductivos. La danza también es una forma de comunicación. Utilizamos el lenjuage no verbal entre nosotras para expresar sentimientos y emociones atraves de gestos y movimientos'
    }
    this.dnc = {
      title: 'Nuestras bailarinas', 
      img: {
        src: '../../../assets/images/gallery/balletOne.jpg',
        alt: 'Bailarinas'
      }, 
      titleDescription: 'Somos bailarinas',
      description: 'Con mas de 10 años de historia, nos alegra ir de ciudad en ciudad monstrando nuestro espectaculo, haciendo vibrar al publico con nuestros saltos y giros, ya que para nosotras mas que un trabajo es una afición de la que podemos vivir'
    }
    this.show = {
      title: 'Proximos conciertos', 
      img: {
        src: '../../../assets/images/gallery/ballet-san-petersburgo-cartel.jpg',
        alt: 'Espectaculos'
      }, 
      titleDescription: 'Nuestros temas musicales',
      description: 'Nuestros espectaculos van cambiando trimestral mente y en esta ocasión nos complace presentarles, El Rey León, La Cenicienta y para el publico infantil Toy Story. Cada espectaculo tiene una duración de 90 minutos, con un descanso de 15 minutos en mitad del espectaculo, excepto para el de Toy Story que tendrá 2 descansos de 20 minutos para que el publico mas infantil salga a descansar'
    }
  }

  ngOnInit(): void {
  }

}
