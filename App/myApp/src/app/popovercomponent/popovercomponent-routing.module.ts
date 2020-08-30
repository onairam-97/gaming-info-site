import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopovercomponentPage } from './popovercomponent.page';

const routes: Routes = [
  {
    path: '',
    component: PopovercomponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopovercomponentPageRoutingModule {}
