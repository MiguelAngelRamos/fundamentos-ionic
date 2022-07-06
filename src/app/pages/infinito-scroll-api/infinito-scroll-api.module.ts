import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitoScrollApiPageRoutingModule } from './infinito-scroll-api-routing.module';

import { InfinitoScrollApiPage } from './infinito-scroll-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitoScrollApiPageRoutingModule
  ],
  declarations: [InfinitoScrollApiPage]
})
export class InfinitoScrollApiPageModule {}
