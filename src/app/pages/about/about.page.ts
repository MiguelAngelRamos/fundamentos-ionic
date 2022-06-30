import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  
  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  onClick() {
    this.presentActionSheet();
  }

  // Método que active nuestro action Sheet

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      backdropDismiss: false,
      buttons:[
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          id: 'delete-button',
          data: {
            type: 'delete'
          },
          handler: () => {
            console.log('Delete')
          }
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data: 10,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: 'caret-forward-circle-outline',
          data: 'Data value',
          handler: () => {
            console.log('Play');
          }
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          handler: () => {
            console.log('Favoritos')
          }
        },
        {
          text: 'Cancelar',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked')
          }
        }
      ]
    });
    await actionSheet.present();

    // codigo adicional
    const { role, data } = await actionSheet.onDidDismiss();
    console.log(data);
    console.log(role);

  }


}
