import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Popovercomponent2Page } from './popovercomponent2.page';

const routes: Routes = [
  {
    path: '',
    component: Popovercomponent2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Popovercomponent2PageRoutingModule {}
