import { Component, OnInit, Input } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  @Input() id: number;
  // nested if the component is called in a nested manner. Used to prevent infinite card loops
  @Input() nested:boolean;
  constructor(private detailService:DetailService) { }
  course;
  getCourseDetail(){
    this.detailService.getCourse(this.id).subscribe
    (
      data=>{
        this.course=data;
      }
    );
  }
  ngOnInit() {
    this.getCourseDetail();
  }

}
