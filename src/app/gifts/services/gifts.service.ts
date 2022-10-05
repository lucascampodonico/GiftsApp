import { Injectable } from '@angular/core';

@Injectable()
export class GiftsService {
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifts(data: string) {
    data = data.toLocaleLowerCase();
    if (!this._historial.includes(data)) {
      console.log(data);
      this._historial.unshift(data);
      this._historial = this._historial.splice(0, 10);
    }
  }
  constructor() {}
}
