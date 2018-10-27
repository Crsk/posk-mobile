import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SectorMesa } from '../interfaces/SectorMesa';

@Injectable({
  providedIn: 'root'
})
export class SectorMesaService {
  
  private headers: HttpHeaders;
  private accessUrl: string = 'https://localhost:5001/api/sectormesas/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  getSectores() {
    return this.http.get<SectorMesa[]>(this.accessUrl, { headers: this.headers });
  }
}
