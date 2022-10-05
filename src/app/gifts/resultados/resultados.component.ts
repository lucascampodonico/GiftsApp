import { Component } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {
  constructor(private _GiftService: GiftsService) {}

  get resultados() {
    return this._GiftService.resultados;
  }
}
