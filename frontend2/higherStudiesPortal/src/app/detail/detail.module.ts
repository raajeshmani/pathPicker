import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbCardModule,
  NbAccordionModule,
  NbTabsetModule
} from '@nebular/theme';

import { CourseDetailComponent } from './course-detail/course-detail.component';


@NgModule({
  declarations: [CourseDetailComponent,],
  imports: [
    CommonModule,
    NbCardModule,
    NbAccordionModule,
    NbTabsetModule,
  ],
  exports: [
    CourseDetailComponent,
  ],
})
export class DetailModule { }
