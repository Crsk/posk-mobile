import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Mesa } from '../../interfaces/mesa';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PedidoPage } from '../../pages/pedido/pedido.page';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})

export class MesaComponent implements OnInit {
  @Input() mesa: Mesa;
  private color: string = '#039985';

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    if (this.mesa.libre == false) {
      this.color = '#bc1803';
    }
    else {
      this.color = '#039985';
    }
  }

  escogerMesa(mesa: Mesa) {
    this.openModal(mesa);
  }
  async openModal(mesa: Mesa) {
    const modal = await this.modalController.create({
      component: PedidoPage,
      componentProps: {
        mesa: mesa
      }
    });
    await modal.present();
  }
}
