import { Component, OnInit, Input } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {
  @Input() id: number;
  // nested if the component is called in a nested manner. Used to prevent infinite card loops
  @Input() called: String;
  constructor(private detailService: DetailService) { }
  exam;
  getCourseDetail() {
    this.detailService.getItem('exam', this.id).subscribe
      (
        data => {
          this.exam = data;
        }
      );
  }
  ngOnInit() {
    this.getCourseDetail();
  }
}
