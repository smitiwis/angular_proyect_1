// llamando al componente
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls:  ["./body.component.css"]
})

export class BodyComponent {
  
  tarjeta = "tarjeta";
  imagen = "perrito";
  frase: any  = {
    autor : 'Stephen kagg',
    mensaje : "Intentalo y fracasa, pero no fracases sin intentarlo"
  } ;
  personajes: string[] = ['Luis', 'Angel', 'Nefeli', 'Estefani', 'Esther'];  

  productos = [
    {
      id: '1',
      image: 'assets/img/borrador.jpg',
      title: 'borrador',
      price: 15000,
      description: 'estos útiles escolares en su gran mayoría,'
    },
    {
      id: '2',
      image: 'assets/img/lapicero.jpg',
      title: 'lapicero',
      price: 25600,
      description: 'estos útiles escolares en su gran mayoría,'
    },
    {
      id: '3',
      image: 'assets/img/cuaderno.jpg',
      title: 'cuaderno',
      price: 35000,
      description: 'estos útiles escolares en su gran mayoría,'
    },
    {
      id: '4',
      image: 'assets/img/lustre.jpeg',
      title: 'lustre',
      price: 35600,
      description: 'estos útiles escolares en su gran mayoría,'
    },
    {
      id: '5',
      image: 'assets/img/resaltador.jpg',
      title: 'resaltador',
      price: 15600,
      description: 'estos útiles escolares en su gran mayoría,'
    },
    {
      id: '6',
      image: 'assets/img/tajador.jpg',
      title: 'tajador',
      price: 96000,
      description: 'estos útiles escolares en su gran mayoría,'
    },
  ];
}
