import { Component, OnInit } from '@angular/core';
import { IComponente } from 'src/app/interfaces/componente';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  componentes: IComponente [] = [
    {
      icon: 'book-outline',
      name: 'about',
      redirectTo: '/about'
    },
    {
      icon: 'call-outline',
      name: 'contact',
      redirectTo: '/contact'
    },
    {
      icon:'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon:'radio-button-off-outline',
      name: 'Button',
      redirectTo: '/button'
    },
    {
      icon:'card-outline',
      name: 'Card',
      redirectTo: '/card'
    },
    {
      icon:'card',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon:'infinite-outline',
      name: 'Infinite-scroll',
      redirectTo:'/infinito'
    },
    {
      icon: 'globe-outline',
      name: 'Infinito-Scroll-Api',
      redirectTo:'/infinito-scroll-api'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
