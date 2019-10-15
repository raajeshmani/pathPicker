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
  @Input() called:String;
  constructor(private detailService:DetailService) { }
  course;
  getCourseDetail(){
    this.detailService.getItem('course',this.id).subscribe
    (
      data=>{
        this.course=data;
      }
    );
  }
  ngOnInit() {
    // console.log(this.called);
    this.getCourseDetail();
  }

}
