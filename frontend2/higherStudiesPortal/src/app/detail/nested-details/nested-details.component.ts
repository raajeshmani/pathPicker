import { Component, OnInit,Input } from '@angular/core';
import { DetailsService } from '../../display/details.service';

@Component({
  selector: 'app-nested-details',
  templateUrl: './nested-details.component.html',
  styleUrls: ['./nested-details.component.css']
})
export class NestedDetailsComponent implements OnInit {
  @Input() dtype:String;
  @Input() called:String;
  @Input() id_arr:Array<number>;
  items:Array<number>;
  constructor(private detailsService:DetailsService) { }

  getCourses(){
    this.detailsService.getItems(this.dtype,null).subscribe
    (
      data=>{
        for (var detail in data){
          this.items.push(detail['id']);
        }
      }
    );
  }

  ngOnInit() {
    if(!this.id_arr){
      this.getCourses();
    }
    else{
      this.items=this.id_arr;
    }
  }

}

