import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../modelo/user';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	user: User;
	password: String;
  constructor(public navCtrl: NavController) {
  	this.user = new User();
  }

  doLoginEmail(model, isValid) {
    
  
   }
}