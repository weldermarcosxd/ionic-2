import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { PokemonService } from '../../providers/pokemon-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pokemons: Observable<any>;
  searchTerm: String = '';
  count: Number = 10;

  constructor(public navCtrl: NavController, public pokemonService: PokemonService, public alertController: AlertController, public toastController: ToastController) {
    this.loadPokemons();
  }

  public loadPokemons() {
    this.pokemons = this.pokemonService.getPokemons();
  }

  public loadMore() {
    this.count = this.count.valueOf() + 10;
    this.pokemons = this.pokemonService.getMorePokemons(this.count);
  }

  public favorite(pokemon) {
    let toast = this.toastController.create({
      message: pokemon.name + " is now your favorite",
      duration: 2000,
      position: "bottom"
    });
    toast.present();
  }

  ionViewDidLoad() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.pokemons = this.pokemonService.filterItems(this.searchTerm);
  }

}
