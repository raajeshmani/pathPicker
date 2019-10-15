import { Component, OnInit,Input } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {
  @Input() dtype:String;
  @Input() called:String;
  @Input() params;
  items;
  constructor(private detailsService:DetailsService) { }

  getCourses(){
    this.detailsService.getItems(this.dtype,this.params).subscribe
    (
      data=>{
        this.items=data;
      }
    );
  }

  ngOnInit() {
    console.log('PARAMS'+this.params);
    this.getCourses();
  }

}
