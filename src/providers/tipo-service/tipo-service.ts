import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the TipoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TipoServiceProvider {

  constructor(
    private http: Http
  ) {}

  getTipos() {
    return this.http.get('http://eatinggoapp.herokuapp.com/api/tipos')
    .map(res => res.json())
    .toPromise();
  }

}
