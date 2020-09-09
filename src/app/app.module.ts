import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiSelectorComponent } from './multiselector/multiselector.component';
import { MultiLabelComponent } from './multilabel/multilabel.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MultiSelectorComponent,
    MultiLabelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
