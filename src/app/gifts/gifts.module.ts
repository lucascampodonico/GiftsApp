import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorComponent } from './buscador/buscador.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { GiftPageComponent } from './gift-page/gift-page.component';
import { GiftsService } from './services/gifts.service';

@NgModule({
  imports: [CommonModule],
  declarations: [BuscadorComponent, ResultadosComponent, GiftPageComponent],
  exports: [BuscadorComponent, ResultadosComponent, GiftPageComponent],
  providers: [GiftsService]
})
export class GiftsModule {}
