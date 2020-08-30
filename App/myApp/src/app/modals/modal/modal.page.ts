import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ApiService } from 'src/app/api.service';

import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  games;
  games2;
  games3;
  games4;
  arrayAux = [];
  arrayAux2 = [];
  arrayAux3 = [];
  arrayAux4 = [];
  platformBool;
  genreBool;
  textBool;
  jaccardBool;

  constructor(private modalController: ModalController, private apiService: ApiService, private dataService: DataService) { }

  ngOnInit() {
    this.passingValue();
    this.visualizzaVideogamesByPlatform();
    this.visualizzaVideogamesByGenre();
    this.visualizzaVideogamesByTextSearch(this.dataService.event);
    this.visualizzaVideogamesByJaccardSearch(this.dataService.event2);
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async visualizzaVideogamesByPlatform() {
    this.apiService.getVideogamesByPlatform(this.dataService.platform).then(
      (games) => {
        this.games = games;
        console.log(this.games);
        this.arrayAux = this.games;
        console.log(this.arrayAux.length);
      },
      (rej) => {
      }
    );
  }

  async visualizzaVideogamesByGenre() {
    this.apiService.getVideogamesByGenre(this.dataService.genre).then(
      (games) => {
        this.games2 = games;
        console.log(this.games2);
        this.arrayAux2 = this.games2;
        console.log(this.arrayAux2.length);
      },
      (rej) => {
      }
    );
  }

  passingValue() {
    this.platformBool = this.dataService.platformBool;
    this.genreBool = this.dataService.genreBool;
    this.textBool = this.dataService.textBool;
    this.jaccardBool = this.dataService.jaccardBool;
  }

async visualizzaVideogamesByTextSearch(ev: string) {
    this.apiService.getVideogamesByTextSearch(ev).then(
      (games) => {
        this.games3 = games;
        console.log(this.games3);
        this.arrayAux3 = this.games3;
        console.log(this.arrayAux3.length);
      },
      (rej) => {
      }
    );
  }

  async visualizzaVideogamesByJaccardSearch(ev: string) {
    this.apiService.getVideogamesByJaccardSearch(ev).then(
      (games) => {
        this.games4 = games;
        console.log(this.games4);
        this.arrayAux4 = this.games4;
        console.log(this.arrayAux4.length);
      },
      (rej) => {
      }
    );
  }


}
