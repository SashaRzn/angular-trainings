import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiSelectorComponent } from './multiselector/multiselector.component';
import { MultiLabelComponent } from './multilabel/multilabel.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; 

@NgModule({
  imports: [
    BrowserModule,
    MatIconModule,
    NoopAnimationsModule
  ],
  declarations: [
    AppComponent,
    MultiSelectorComponent,
    MultiLabelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
