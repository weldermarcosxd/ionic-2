import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service';
import { LoginPage } from '../pages/login-page/login-page';
import { PokemonList } from '../pages/PokemonList/PokemonList';
import { PokemonFavorite } from '../pages/PokemonFavorite/PokemonFavorite';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private auth: AuthService) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Pokemon List', component: PokemonList },
      { title: 'Favorite Pokemon', component: PokemonFavorite }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.auth.logout().subscribe(succ => {
        this.nav.setRoot(LoginPage)
    });
  }
}
