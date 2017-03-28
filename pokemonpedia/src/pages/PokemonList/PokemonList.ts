import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PokemonService } from '../../providers/pokemon-service';
import { AuthService } from '../../providers/auth-service';
import { Pokemon } from '../../model/pokemon/Pokemon';

@Component({
  selector: 'pokemon-list',
  templateUrl: 'PokemonList.html'
})
export class PokemonList {

  pokemons: Pokemon[];
  searchTerm: String = '';
  count: Number = 10;
  username: String = '';
  email: String = '';

  constructor(public navCtrl: NavController, private auth: AuthService, public pokemonService: PokemonService, public alertController: AlertController, public storage: Storage, public toastController: ToastController) {}

  ngOnInit(){
    this.loadPokemons();
    let info = this.auth.getUserInfo();
    if(null != info){
      this.username = info.name;
      this.email = info.email;
    }
  }

  public loadPokemons() {
    this.pokemonService.getPokemons()
    .subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  public loadMore() {
    this.count = this.count.valueOf() + 10;
    this.pokemonService.getMorePokemons(this.count)
    .subscribe(pokemons => {
      let novosPokemons = this.pokemons.concat(pokemons);
      this.pokemons = novosPokemons;
    });
  }

  public favorite(pokemon) {
    this.storage.ready().then(() => {
      this.storage.set('favorite', pokemon._id).then(() => {
        let toast = this.toastController.create({
          message: pokemon.name + " is now your favorite",
          duration: 2000,
          position: "bottom"
        });
        toast.present();
      });
    });
  }

  ionViewDidLoad() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.pokemonService.filterItems(this.searchTerm)
    .subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

}
