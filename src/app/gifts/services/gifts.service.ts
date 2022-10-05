import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GiftsService {
  private apiKey: string = '2Kr1vIo9GYMOmF0zGG793UsOwGZzrg70';
  private _historial: string[] = [];
  //TODO: CAMBIA EL TIPO
  public resultados: any;

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

    this._http
      .get(
        'https://api.giphy.com/v1/gifs/search?api_key=' +
          this.apiKey +
          '&q=' +
          data +
          '&limit=10'
      )
      .subscribe({
        next: (d:any) => {
          this.resultados = d.data;
          console.log(d.data)
        },
      });
  }
  constructor(private _http: HttpClient) {}
}
