import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ICharacterInfo } from '../../interfaces/ICharacters';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinito-scroll-api',
  templateUrl: './infinito-scroll-api.page.html',
  styleUrls: ['./infinito-scroll-api.page.scss'],
})
export class InfinitoScrollApiPage implements OnInit {

  characterInfo: ICharacterInfo[] = [];
  page: number = 0;

  @ViewChild(IonInfiniteScroll) infiniteScroll:IonInfiniteScroll;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  getCharacterInfo(page: number) {
    // Rxjs
    this.dataService.getCharacteres(page).subscribe( data => {
      this.characterInfo.push(...data.results);
      console.log(this.characterInfo);
      this.infiniteScroll.complete();
    });
  }

  loadData() {
    setTimeout(()=> {
      this.page++;
      console.log(this.page);
      if(this.page === 42) {
        console.log('este el fin');
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      this.getCharacterInfo(this.page);
      console.log('load data');
    }, 1500);
  }

}
