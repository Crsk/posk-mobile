import { Component, OnInit, Input } from '@angular/core';
import { Mesa } from '../../interfaces/mesa';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})

export class MesaComponent implements OnInit {
  @Input() mesa: Mesa;

  constructor() { }

  ngOnInit() {
  }

}
