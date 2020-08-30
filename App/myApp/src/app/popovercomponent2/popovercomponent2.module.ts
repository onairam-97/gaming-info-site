import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Popovercomponent2PageRoutingModule } from './popovercomponent2-routing.module';

import { Popovercomponent2Page } from './popovercomponent2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Popovercomponent2PageRoutingModule
  ],
  declarations: [Popovercomponent2Page]
})
export class Popovercomponent2PageModule {}
