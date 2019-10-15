import { Component, OnInit, Input } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-college-detail',
  templateUrl: './college-detail.component.html',
  styleUrls: ['./college-detail.component.css']
})
export class CollegeDetailComponent implements OnInit {
  @Input() id: number;
  // nested if the component is called in a nested manner. Used to prevent infinite card loops
  @Input() called: String;
  constructor(private detailService: DetailService) { }
  college;
  getCourseDetail() {
    this.detailService.getItem('college', this.id).subscribe
      (
        data => {
          this.college = data;
        }
      );
  }
  ngOnInit() {
    this.getCourseDetail();
  }

}
