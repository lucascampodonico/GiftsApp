import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GiftsModule } from './gifts/gifts.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, FormsModule, GiftsModule, SharedModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
