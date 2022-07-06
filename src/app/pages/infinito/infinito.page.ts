import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinito',
  templateUrl: './infinito.page.html',
  styleUrls: ['./infinito.page.scss'],
})
export class InfinitoPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20); // any cualquier

  constructor() { }

  ngOnInit() {
  }

  loadData() {
    setTimeout(()=> {
      // * Para que esto termine
      if(this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const arrayTemp = Array(20);
      this.data.push(...arrayTemp);
      this.infiniteScroll.complete();
    }, 1500);
  }

}
