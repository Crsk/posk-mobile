import { MesaService } from './../services/mesa.service';
import { Component, OnInit } from '@angular/core';
import { Mesa } from '../interfaces/mesa';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  private mesas: Mesa[] = [];
  private rows: any;
  constructor(private mesaService: MesaService) { }

  ngOnInit() {
    this.mesaService.getMesas().subscribe(mesas => {
      this.mesas = mesas
      this.rows = Array.from(Array(Math.ceil(mesas.length / 3)).keys());
    });
  }
}
