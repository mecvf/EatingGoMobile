import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the SessionServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SessionServiceProvider {
	
	requestOptions: RequestOptions;

  constructor(public http: Http) {
  	let headers = new Headers({ 'Content-Type': 'application/json' });
    this.requestOptions = new RequestOptions({headers: headers});
  }

  obtengoToken(email, password) {
    return this.http.post('http://eatinggoapp.herokuapp.com/api/sessions',{"email": email, "password":password}, this.requestOptions)
    .map(res => res.json())
    ;
  }

}
