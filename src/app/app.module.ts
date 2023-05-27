import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxInfiniteGridModule } from '@egjs/ngx-infinitegrid';

import { MaterialExampleModule } from '../material.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, BrowserModule, FormsModule, MaterialExampleModule, ReactiveFormsModule, NgxInfiniteGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
