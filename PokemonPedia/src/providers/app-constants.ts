import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

const CONFIG = {
  "url":"http://192.168.0.101:3000"
}

@Injectable()
export class AppConstants {

  constructor() {
  }

  public getUrl(){
    return CONFIG.url;
  }

}
