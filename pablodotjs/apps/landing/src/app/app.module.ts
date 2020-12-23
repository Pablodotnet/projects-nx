import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// UI Library
import { LouiModule } from '@pablodotjs/loui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LouiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
