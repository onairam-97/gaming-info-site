import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { ModalPage } from '../modals/modal/modal.page';
import { ModalController } from '@ionic/angular';

import { DataService } from '../data.service';

@Component({
  selector: 'app-popovercomponent2',
  templateUrl: './popovercomponent2.page.html',
  styleUrls: ['./popovercomponent2.page.scss'],
})
export class Popovercomponent2Page implements OnInit {

  constructor(private popover:PopoverController, private dataService: DataService, private modalController: ModalController) { }

  ngOnInit() {
  }

  closePopover() {
    this.popover.dismiss();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  clickGenre(genre: string) {
    this.dataService.setGenre(genre);
    console.log(this.dataService.genre);
  }

}
