import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopovercomponentPageRoutingModule } from './popovercomponent-routing.module';

import { PopovercomponentPage } from './popovercomponent.page';

import { ModalPage } from '../modals/modal/modal.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopovercomponentPageRoutingModule
  ],
  declarations: [PopovercomponentPage, ModalPage],
  entryComponents: [ModalPage]
})
export class PopovercomponentPageModule {}
