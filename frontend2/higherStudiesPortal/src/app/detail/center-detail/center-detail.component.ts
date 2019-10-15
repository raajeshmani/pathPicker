import { Component, OnInit, Input } from '@angular/core';
import { DetailService } from '../detail.service';
@Component({
  selector: 'app-center-detail',
  templateUrl: './center-detail.component.html',
  styleUrls: ['./center-detail.component.css']
})
export class CenterDetailComponent implements OnInit {
  @Input() id: number;
  // nested if the component is called in a nested manner. Used to prevent infinite card loops
  @Input() called: String;
  constructor(private detailService: DetailService) { }
  center;
  getCourseDetail() {
    this.detailService.getItem('center', this.id).subscribe
      (
        data => {
          this.center = data;
        }
      );
  }
  ngOnInit() {
    this.getCourseDetail();
  }

}