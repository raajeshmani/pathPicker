import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbListModule,NbCardModule } from '@nebular/theme';

import { DetailModule } from '../detail/detail.module';
import { ListDetailsComponent } from './list-details/list-details.component';


@NgModule({
  declarations: [ListDetailsComponent,],
  imports: [
    CommonModule,
    DetailModule,
    NbListModule,
    NbCardModule,
  ],
  exports: [
    ListDetailsComponent,
  ]
})
export class DisplayModule { }
