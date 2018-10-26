import { Component, OnInit } from '@angular/core';
import { SyncService } from '../services/sync.service';
import { Sync } from '../interfaces/sync';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  private syncs: Sync[] = [];

  constructor(private syncService: SyncService) {}

  ngOnInit() {
    this.syncService.getSyncs().subscribe(syncs => this.syncs = syncs);
  }
}
