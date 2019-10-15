import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// import { DetailModule } from './disp/detail.module';
import { DisplayModule } from './display/display.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    DisplayModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
