import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {
  constructor(public alertController: AlertController) {
  }

  showAlert(title, subtitle, buttons) {
    let alert = this.alertController.create({
      title: title,
      subTitle: subtitle,
      buttons: buttons
    });
    alert.present();
  }
}
