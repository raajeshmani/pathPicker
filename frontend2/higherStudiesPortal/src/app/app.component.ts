import { Component,ChangeDetectorRef } from '@angular/core';
import {HttpParams} from  "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private cdr:ChangeDetectorRef){
  }
  college_name;
  expense_min=0;
  expense_max;
  curr_dtype='course';
  params=null;
  title = 'higherStudiesPortal';
  
  search(dtype){
    this.curr_dtype=dtype;
    if(dtype=='college'){
      if(this.college_name){
      this.params = new  HttpParams().set('name__contains', this.college_name)
      }
      if(this.expense_max){
        this.params=this.params.set('expenses__range', this.expense_min+','+this.expense_max);
      }
      console.log(this.params);
    }
    // this.cdr.detectChanges();
  }
}
