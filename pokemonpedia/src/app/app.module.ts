import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { LoginPage } from '../pages/login-page/login-page';
import { RegisterPage } from '../pages/register/register.ts';
import { PokemonList } from '../pages/PokemonList/PokemonList';
import { PokemonFavorite } from '../pages/PokemonFavorite/PokemonFavorite';
import { PokemonService } from '../providers/pokemon-service';
import { AuthService } from '../providers/auth-service';
import { AppConstants } from '../providers/app-constants';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
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
    LoginPage,
    RegisterPage,
    PokemonList,
    PokemonFavorite
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppConstants,
    AuthService,
    PokemonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
