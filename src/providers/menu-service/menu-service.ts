import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the MenuServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MenuServiceProvider {

  constructor(
    private http: Http
  ) {}

  getMenus() {
    return this.http.get('https://eatinggoapp.herokuapp.com/api/menus')
    .map(res => res.json())
    .toPromise();
  }

}
