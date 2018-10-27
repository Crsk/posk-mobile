import { SectorMesa } from './../interfaces/sectorMesa';
import { Mesa } from '../interfaces/mesa';
import { MesaService } from './../services/mesa.service';
import { SectorMesaService } from './../services/sector-mesa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  private mesas: Mesa[] = [];
  private sectores: SectorMesa[] = [];
  private rows: any;
  private icons: string;

  constructor(private mesaService: MesaService, private sectorMesaService: SectorMesaService) {
    this.icons = "todos";
  }

  ngOnInit() {
    this.getMesas();
    this.getSectores();    
  }

  getMesasPorSector(sectorId) {
    this.mesaService.getMesasPorSector(sectorId).subscribe(mesas => this.mesas = mesas);
  }

  getMesas() {
    this.mesaService.getMesas().subscribe(mesas => {
      this.mesas = mesas
      this.rows = Array.from(Array(Math.ceil(mesas.length / 3)).keys());
    });
  }

  getSectores() {
    this.sectorMesaService.getSectores().subscribe(sectores => this.sectores = sectores);
  }
}
