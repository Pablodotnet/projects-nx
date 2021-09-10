import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {
  ButtonModule,
  InputModule,
  ModalModule,
  PlaceholderModule
} from 'carbon-components-angular';

import { AppComponent } from './app.component';
import { AddCompanyModalComponent } from './components/add-company-modal/add-company-modal.component';
import { CalculateYearlyTotalPipe } from './pipes/calculate-yearly-total.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddCompanyModalComponent,
    CalculateYearlyTotalPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    // Carbon modules
    ButtonModule,
    InputModule,
    ModalModule,
    PlaceholderModule,
  ],
  providers: [],
  entryComponents: [
    AddCompanyModalComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
