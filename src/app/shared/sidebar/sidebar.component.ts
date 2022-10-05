import { Component } from '@angular/core';
import { GiftsService } from '../../gifts/services/gifts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private giftService: GiftsService) {}

  get historial() {
    return this.giftService.historial;
  }
}
