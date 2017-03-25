import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { PokemonList } from '../pages/PokemonList/PokemonList';
import { PokemonFavorite } from '../pages/PokemonFavorite/PokemonFavorite';
import { PokemonService } from '../providers/pokemon-service';
import { AppConstants } from '../providers/app-constants';


@NgModule({
  declarations: [
    MyApp,
    PokemonList,
    PokemonFavorite
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PokemonList,
    PokemonFavorite
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppConstants,
    PokemonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
