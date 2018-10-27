import { TabsPage } from './../../tabs/tabs.page';
import { Component, OnInit, Input } from '@angular/core';
import { Mesa } from '../../interfaces/mesa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})

export class MesaComponent implements OnInit {
  @Input() mesa: Mesa;
  private color: string = '#039985';

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.mesa.libre == false) {
      this.color = '#bc1803';
    }
    else {
      this.color = '#039985';
    }
  }

  escogerMesa(mesa: Mesa) {
    this.router.navigateByUrl('/tabs/(about:about)');
  }
}
