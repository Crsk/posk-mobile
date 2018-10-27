import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mesa } from '../interfaces/mesa';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  
  private headers: HttpHeaders;
  private accessUrl: string = 'https://localhost:5001/api/mesas/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  getMesas() {
    return this.http.get<Mesa[]>(this.accessUrl, { headers: this.headers });
  }

  getMesasPorSector(sectorId: number) {
    return this.http.get<Mesa[]>(this.accessUrl + sectorId, { headers: this.headers });
  }
}
