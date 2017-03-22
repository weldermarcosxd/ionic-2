import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/max';
import { AppConstants } from './app-constants';


@Injectable()
export class PokemonService {

  url = this.appConstants.getUrl();

  constructor(public http: Http, public appConstants: AppConstants) {
  }

  public getPokemons() {
    return this.http.get(this.url + '/pokemons')
      .map(response => response.json());
  }

  public getMorePokemons(offset: Number){
    return this.http.get(this.url + '/pokemons?offset=' + offset)
      .map(response => response.json());
  }

  public filterItems(search: String){
    return this.http.get(this.url + '/pokemons/search?search=' + search)
      .map(response => response.json());
  }

}
