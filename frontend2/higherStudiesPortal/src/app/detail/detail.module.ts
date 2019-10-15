import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbCardModule,
  NbAccordionModule,
  NbTabsetModule,
  NbListModule,
  NbStepperModule,
  NbButtonModule,
} from '@nebular/theme';

import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CollegeDetailComponent } from './college-detail/college-detail.component';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { CenterDetailComponent } from './center-detail/center-detail.component';
import { NestedDetailsComponent } from './nested-details/nested-details.component';




@NgModule({
  declarations: [CourseDetailComponent, CollegeDetailComponent, ExamDetailComponent, CenterDetailComponent, NestedDetailsComponent,],
  imports: [
    CommonModule,
    NbCardModule,
    NbAccordionModule,
    NbTabsetModule,
    NbListModule,
    NbStepperModule,
    NbButtonModule,
  ],
  exports: [
    CourseDetailComponent,
    CollegeDetailComponent,
    ExamDetailComponent,
    CenterDetailComponent,
  ],
})
export class DetailModule { }
