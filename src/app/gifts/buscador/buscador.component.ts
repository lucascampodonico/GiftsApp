import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GiftsService } from '../services/gifts.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent {
  constructor(private giftsService: GiftsService) {}

  @ViewChild('txtBuscar') txtBuscar: ElementRef;

  buscar() {
    this.giftsService.buscarGifts(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = '';
  }
}
