import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sync } from '../interfaces/sync';

@Injectable({
  providedIn: 'root'
})
export class SyncService {
  
  private headers: HttpHeaders;
  private accessUrl: string = 'https://localhost:5001/api/syncs/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  getSyncs() {
    return this.http.get<Sync[]>(this.accessUrl, { headers: this.headers });
  }
}
