import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitoScrollApiPage } from './infinito-scroll-api.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitoScrollApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitoScrollApiPageRoutingModule {}
