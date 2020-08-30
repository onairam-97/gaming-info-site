import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  platform;
  genre;
  platformBool;
  genreBool;
  textBool;
  jaccardBool;
  event;
  event2;

  constructor() { }

  setPlatform(platform: string) {
    this.platform = platform;
  }

  setGenre(genre: string) {
    this.genre = genre;
  }

  setPlatformBool() {
    this.jaccardBool = false;
    this.textBool = false;
    this.genreBool = false;
    this.platformBool = true;
  }

  setGenreBool() {
    this.jaccardBool = false;
    this.textBool = false;
    this.platformBool = false;
    this.genreBool = true;
  }

  setTextBool() {
    this.jaccardBool = false;
    this.genreBool = false;
    this.platformBool = false;
    this.textBool = true;
  }

  setJaccardBool() {
    this.textBool = false;
    this.platformBool = false;
    this.genreBool = false;
    this.jaccardBool = true;
  }

  setEvent(ev: string) {
    this.event = ev;
  }

  setEvent2(ev : string) {
    this.event2 = ev;
  }

}
