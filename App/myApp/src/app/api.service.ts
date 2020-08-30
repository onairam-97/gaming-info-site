import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getVideogamesHome() {
    const body = {
    };

    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:4567/get_videogames_list', body).subscribe(
        data => {

          let games = data;
          console.log(games)

          resolve(games);
        },
        (err) => {
          reject();
        }
      );
    });
  }

  getVideogamesByPlatform(platform: string) {
    const body = {
      platform: platform
    };

    console.log(body);

    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:4567/platform/' + body.platform).subscribe(
        data => {

          let games = data;
          console.log(games)

          resolve(games);
        },
        (err) => {
          reject();
        }
      );
    });
  }

  getVideogamesByGenre(genre: string) {
    const body = {
      genre: genre
    };

    console.log(body);

    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:4567/genre/' + body.genre).subscribe(
        data => {

          let games = data;
          console.log(games);

          resolve(games);
        },
        (err) => {
          reject();
        }
      );
    });
  }

  getVideogamesByTextSearch(stringa: string) {
    const body = {
      stringa: stringa
    };

    console.log(body);

    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:4567/videogames_search/' + body.stringa).subscribe(
        data => {

          let games = data;
          console.log(games);

          resolve(games);
        },
        (err) => {
          reject();
        }
      );
    });
  }

  getVideogamesByJaccardSearch(stringa: string) {
    const body = {
      stringa: stringa
    };

    console.log(body);

    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:4567/videogames_search_jaccard/' + body.stringa).subscribe(
        data => {

          let games = data;
          console.log(games);

          resolve(games);
        },
        (err) => {
          reject();
        }
      );
    });
  }
}
