import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { ModalPage } from '../modals/modal/modal.page';
import { ModalController } from '@ionic/angular';

import { DataService } from '../data.service';

@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss']
})
export class PopovercomponentPage implements OnInit {

  constructor(private popover:PopoverController,  private modalController:ModalController, private dataService: DataService) { }

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

  clickPlatform(platform: string) {
    this.dataService.setPlatform(platform);
    console.log(this.dataService.platform);
  }

}
