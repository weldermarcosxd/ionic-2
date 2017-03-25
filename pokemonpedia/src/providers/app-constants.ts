import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const CONFIG = {
  // "url":"http://192.168.0.101:3000"
     "url":"https://pokemonpedia.herokuapp.com/pokemons"
}

@Injectable()
export class AppConstants {

  constructor() {
  }

  public getUrl(){
    return CONFIG.url;
  }

}
