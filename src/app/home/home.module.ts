import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {MdCardModule} from '@angular/material';
import {MdMenuModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import {MdSidenavModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdTooltipModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MaterialModule} from '@angular/material';
import {CovalentMenuModule} from '@covalent/core';
import {CovalentNotificationsModule} from '@covalent/core';
import {CovalentLayoutModule} from '@covalent/core';
import {CovalentMediaModule} from '@covalent/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  exports: [HomeComponent],
  imports: [  HomeRoutingModule,
              BrowserModule,
              BrowserAnimationsModule,
              CommonModule,
              MdCardModule,
              MdMenuModule,
              MdInputModule,
              MdButtonModule,
              MdListModule,
              MdIconModule,
              MdSidenavModule,
              MdToolbarModule,
              MdTooltipModule,
              MdDialogModule,
              MdTabsModule,
              CovalentLayoutModule,
              CovalentMediaModule,
              CovalentMenuModule,
              CovalentNotificationsModule
            ],
  declarations: [HomeComponent],
  providers: []
})
export class HomeModule { }
