import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LazyLoadImageModule } from 'ng2-lazyload-image';
import { AppConstants } from '../providers/app-constants';
import { PokemonService } from '../providers/pokemon-service';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    LazyLoadImageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [AppConstants, PokemonService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
