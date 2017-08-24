import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuServiceProvider } from '../../providers/menu-service/menu-service';
import { TipoServiceProvider } from '../../providers/tipo-service/tipo-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menus: any[] = [];
  tipos: any[] = [];

  constructor(
    public navCtrl: NavController,
    public menuServiceProvider: MenuServiceProvider,
    public tipoServiceProvider: TipoServiceProvider
  ) {}

  ionViewDidLoad(){
  
    this.menuServiceProvider.getMenus()
    .then(data => {
      this.menus = data.results;
    })
    .catch(error =>{
      console.error(error);
    })

    this.tipoServiceProvider.getTipos()
    .then(data2 => {
      this.tipos = data2.results;
    })
    .catch(error2 =>{
      console.error(error2);
    })


  }
}
