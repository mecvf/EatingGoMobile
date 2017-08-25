import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../modelo/user';
import { SessionServiceProvider } from '../../providers/session-service/session-service';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import {AlertService} from '../../providers/alert-service/alert-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	user: User;
	password: String;
	  
	constructor(public navCtrl: NavController, public storage: Storage, public sessionServiceProvider: SessionServiceProvider, public alertService: AlertService) {
	  	this.user = new User();
	  	
	  }

  	doLoginEmail(model, isValid) {
    	this.sessionServiceProvider.obtengoToken(model.email, model.password).subscribe(
    	response => { 
    		this.storage.ready().then(() => {
    			var miToken = response['authentication_token'];
    			/*let decode = JSON.parse(r);
    			this.user = new User();
    			this.user._id = decode.sub;
    			this.user.email = decode.email;*/
    			this.user = new User();
    			this.user.email = model.email;
    			this.user.token = miToken;
    			
    			this.navCtrl.setRoot(HomePage);

    		})
    	}, error => {
    		this.alertService.showAlert("Error","Email y/o Password no son correctos",["Ok"]);
    	})
  
   	}
}