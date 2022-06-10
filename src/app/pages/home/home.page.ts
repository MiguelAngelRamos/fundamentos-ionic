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
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
