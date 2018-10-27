import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private headers: HttpHeaders;
  private accessUrl: string = 'https://localhost:5001/api/productos/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  getProductos() {
    return this.http.get<Producto[]>(this.accessUrl, { headers: this.headers });
  }
}
