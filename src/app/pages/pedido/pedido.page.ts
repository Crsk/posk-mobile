import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../interfaces/mesa';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  mesa: Mesa = null;

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.mesa = this.navParams.get('mesa');
  }

  goBack() {
    this.modalController.dismiss();
  }

}
