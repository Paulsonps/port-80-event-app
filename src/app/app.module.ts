import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdInputModule, MdToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    HomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
