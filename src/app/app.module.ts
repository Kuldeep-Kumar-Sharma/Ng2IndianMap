import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng2IndianMapModule } from 'ng2-indian-map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   Ng2IndianMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
