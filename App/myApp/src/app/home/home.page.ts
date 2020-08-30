import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { PopoverController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';
import { Popovercomponent2Page } from '../popovercomponent2/popovercomponent2.page';
import { DataService } from 'src/app/data.service';
import { ModalPage } from '../modals/modal/modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  games;
  games2;
  arrayAux2;
  event;
  event2;

  constructor(private apiService: ApiService, private popover:PopoverController, private dataService: DataService, private modalController: ModalController) {}

  ngOnInit() {
    this.visualizzaVidegamesHome();
  }

  async visualizzaVidegamesHome() {
    this.apiService.getVideogamesHome().then(
      (games) => {
        this.games = games;
        console.log(this.games)
      },
      (rej) => {
      }
    );
  }

  async presentPopoverPlatform(ev: any) {
    const popover = await this.popover.create({
      component: PopovercomponentPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });

    return await popover.present();
  }

  async presentPopoverGenre(ev: any) {
    const popover = await this.popover.create({
      component: Popovercomponent2Page,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
    });

    return await popover.present();
  }

  clickPlatform() {
    this.dataService.setPlatformBool();
  }

  clickGenre() {
    this.dataService.setGenreBool();
  }

  passingValues(ev: string) {
    this.dataService.setEvent(ev);
  }

  passingJaccardValues(ev: string) {
    this.dataService.setEvent2(ev);
  }

  clickSearchBar() {
    this.dataService.setTextBool();
  }

  clickJaccardSearchBar() {
    this.dataService.setJaccardBool();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
