import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Mesa } from '../../interfaces/mesa';
import { Producto } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  mesa: Mesa = null;
  productos: Producto[] = [];
  rows: any;

  constructor(private navParams: NavParams, private modalController: ModalController, private productoService: ProductoService) { }

  ngOnInit() {
    this.mesa = this.navParams.get('mesa');
    this.productoService.getProductos().subscribe(productos => {
      this.productos = productos;
      this.rows = Array.from(Array(Math.ceil(productos.length / 2)).keys());
    });
  }

  goBack() {
    this.modalController.dismiss();
  }

}
