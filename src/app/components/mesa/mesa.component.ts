import { Component, OnInit, Input } from '@angular/core';
import { Mesa } from '../../interfaces/mesa';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})

export class MesaComponent implements OnInit {
  @Input() mesa: Mesa;
  private color: string = '#039985';

  constructor() { }

  ngOnInit() {
    if (this.mesa.libre == false) {
      this.color = '#bc1803';
    }
    else {
      this.color = '#039985';
    }
  }

}
