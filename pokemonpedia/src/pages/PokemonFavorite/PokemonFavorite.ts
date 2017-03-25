import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Pokemon } from '../../model/pokemon/Pokemon';
import { PokemonService } from '../../providers/pokemon-service';

@Component({ 
  selector: 'pokemon-favorite',
  templateUrl: 'PokemonFavorite.html'
})
export class PokemonFavorite {
  favorite: Pokemon;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public pokemonService: PokemonService) {  }

  ngOnInit(){
    this.storage.ready().then(() => {
      this.storage.get('favorite').then((_id: Number) => {
         if(null != _id){
           this.getFavorite(_id);
         }
       });
    });
  }

  getFavorite(_id: Number){
    this.pokemonService.getPokemon(_id)
      .subscribe(pokemon => {
        this.favorite = pokemon[0];
      });
  }
}
